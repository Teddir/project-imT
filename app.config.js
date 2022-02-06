/* eslint-disable global-require */
/* eslint-disable no-else-return */
module.exports = () => {
    if (process.env.APP_ENV === 'dev') {
        return require('./app.prod.json')
    }
}