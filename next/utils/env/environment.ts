export const isProduction =
    (process.env.NODE_ENV || '').toLowerCase() === 'production';
