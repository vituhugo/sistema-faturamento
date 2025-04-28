export default () => ({
    port: Number(process.env.PORT) || 3000,
    api: {
        version: process.env.API_VERSION || 'development',
        pagination: {
            perPageDefault: Number(process.env.PAGINATE_PER_PAGE_DEFAULT) || 20
        },
    }
});