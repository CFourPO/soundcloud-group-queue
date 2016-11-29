// NICK P: Production values should not be kept in the repo.
// they should be set on the node process for extra security.
// (also easeir to update variables in production this way)

export let ENV = {
    BASE_URL: process.env.BASE_URL,
    S3_BUCKETS: {
        UNDERWRITER_DOC_UPLOADS: 'uw-docUploads-prod',
    }
};