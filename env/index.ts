let processEnv = process.env.NODE_ENV;
let ENV;

if (processEnv === 'production') {
    // production
    ENV = require('./production').ENV;

} else if (processEnv === 'staging') {
    // staging
    ENV = require('./staging').ENV;
    console.info("running in staging mode");

} else {
    // development
    ENV = require('./development').ENV;
    console.info("running in development mode");
}

ENV = Object.assign({}, ENV);
console.log("ENV ", ENV);
export default ENV;
