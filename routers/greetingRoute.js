const _ = require('koa-route');

module.exports = (app) => {
    app.use(
        _.get('/greeting', (ctx) => {
            ctx.body = {message: "Hello from crypto app"};
        })
    )
}