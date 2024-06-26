import { RoleRepository } from "./role.repository";
import { IRole } from "./role.interface";
import { IResponseData } from "../shared/interfaces/response-data.interface";
import httpStatus from "http-status";
import {
  RoleErrorMessages,
  RoleSuccessMessages,
} from "./enums/role-messages.enum";
import { listOptions } from "../shared/dtos/requests/list-options.dto";
import _ from "lodash";
import { IParamIdDto } from "../shared/dtos/requests/param-id.dto";
import { PermissionRepository } from "../permissions/permission.repository";
import { repoFactory } from "../shared/constants/repo-factory.constant";
import { MAIN_ROLES_ENUM } from "../shared/enums/main-roles.enum";

const permissionRepo = repoFactory.getRepo<PermissionRepository>("permission");
const roleRepo = repoFactory.getRepo<RoleRepository>("role");

export const createRole = async (
  data: Partial<IRole>
): Promise<IResponseData> => {
  const duplicateRole = await roleRepo.findOne({ name: data.name });

  if (duplicateRole) {
    return {
      statusCode: httpStatus.CONFLICT,
      message: RoleErrorMessages.DUPLICATE,
    };
  }

  const result = await roleRepo.create(data);

  return {
    statusCode: httpStatus.CREATED,
    message: RoleSuccessMessages.CREATED,
    data: result,
  };
};

export const findAllRoles = async (
  data: Partial<IRole> & listOptions
): Promise<IResponseData> => {
  const options: listOptions = _.pick(data, ["asc", "limit", "page", "sort"]);
  data = _.omit(data, ["asc", "limit", "page", "sort"]);

  const result = await roleRepo.findAll(data, options);

  const count = await roleRepo.countAll(data);

  return {
    message: RoleSuccessMessages.LISTED,
    data: result,
    metadata: { totalCount: count },
  };
};

export const findOneRole = async (
  data: Partial<IRole>
): Promise<IResponseData> => {
  const result = await roleRepo.findOne(data);

  if (!result) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: RoleErrorMessages.NOT_FOUND,
    };
  }

  return {
    message: RoleSuccessMessages.FOUND,
    data: result,
  };
};

export const updateOneRole = async (
  data: Partial<IRole>
): Promise<IResponseData> => {
  const roleExists = await roleRepo.findOne(_.pick(data, ["_id"]));

  if (!roleExists) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: RoleErrorMessages.NOT_FOUND,
    };
  }

  if (roleExists.name === MAIN_ROLES_ENUM.SUPER_ADMIN) {
    return {
      statusCode: httpStatus.FORBIDDEN,
      message: RoleErrorMessages.FORBIDDEN_UPDATE_SUPER_ADMIN_ROLE,
    };
  }

  const duplicateRole = await roleRepo.findOne({ name: data?.name });

  if (
    duplicateRole &&
    roleExists?._id?.valueOf() !== duplicateRole?._id?.valueOf()
  ) {
    return {
      statusCode: httpStatus.CONFLICT,
      message: RoleErrorMessages.DUPLICATE,
    };
  }

  const result = (await roleRepo.findOneAndUpdate(
    _.pick(data, ["_id"]),
    _.omit(data, ["_id"])
  )) as IRole;

  return {
    message: RoleSuccessMessages.UPDATED,
    data: result,
  };
};

export const deleteOneRole = async (
  data: Partial<IRole>
): Promise<IResponseData> => {
  const roleExists = await roleRepo.findOne(_.pick(data, ["_id"]));

  if (!roleExists) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: RoleErrorMessages.NOT_FOUND,
    };
  }

  if (roleExists.name === MAIN_ROLES_ENUM.SUPER_ADMIN) {
    return {
      statusCode: httpStatus.FORBIDDEN,
      message: RoleErrorMessages.FORBIDDEN_DELETE_SUPER_ADMIN_ROLE,
    };
  }

  const result = (await roleRepo.findOneAndSoftDelete(
    _.pick(data, ["_id"])
  )) as IRole;

  return {
    message: RoleSuccessMessages.DELETED,
    data: result,
  };
};

export const hardDeleteOneRole = async (
  data: IParamIdDto
): Promise<IResponseData> => {
  const roleExists = await roleRepo.findOneAndHardDelete(data);

  if (!roleExists) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: RoleErrorMessages.NOT_FOUND,
    };
  }

  return {};
};

export const getPermissions = async (
  data: IParamIdDto
): Promise<IResponseData> => {
  const roleExists = await roleRepo.findOne(data);

  if (!roleExists) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: RoleErrorMessages.NOT_FOUND,
    };
  }

  return {
    data: await permissionRepo.getRolePermissions(data._id),
  };
};
