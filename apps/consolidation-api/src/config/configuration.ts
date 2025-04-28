import * as process from "node:process";

export default () => ({
    port: Number(process.env.PORT) || 3000,
    api: {
        version: process.env.API_VERSION || 'development',
        pagination: {
            perPageDefault: Number(process.env.PAGINATE_PER_PAGE_DEFAULT) || 20
        },
    },
    job: {
        hourStarts: Number(process.env.CRON_JOB_HOUR_START ?? '2'),
        waitingSyncDelayInHours: Number(process.env.WAITING_DB_SYNC_DELAY_IN_HOURS ?? '2'),
        entriesPerBulk: Number(process.env.ENTRIES_PER_BULK ?? '400')
    },
});