const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();

app.use(cors());

require("./routers/greetingRoute")(app);
require("./routers/cryptoRoutes")(app);

app.listen(8090);