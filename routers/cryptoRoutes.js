const _ = require('koa-route');
const axios = require('axios');

module.exports = (app) => {
    app.use(
        _.get('/coin', async (ctx) => {
            if (!('search' in ctx.query)) {
                ctx.status = 400;
                return ctx.body = {
                    status: "error",
                    message: "Not found 'search' value in querystring."
                };
            }

            const search = ctx.query['search'];
            try {
                const coinsResponse = await axios.get("https://api.coinmarketcap.com/v1/ticker/")
                if (coinsResponse.status !== 200) {
                    ctx.status = 503;
                    return ctx.body = {
                        status: "error",
                        message: "Could not fetch coins"
                    };
                }

                const foundCoin = coinsResponse.data
                    .find(coin => coin.symbol === search);
                if (!foundCoin) {
                    ctx.status = 404;
                    return ctx.body = {
                        status: "error",
                        message: `Not found '${search}' coin`
                    };
                }

                ctx.status = 200;
                ctx.body = {
                    status: "success",
                    price: foundCoin.price_usd,
                    symbol: foundCoin.symbol,
                    name: foundCoin.name,
                    lastUpdate: foundCoin.last_updated,
                    percentChange24h: foundCoin.percent_change_24h
                }
            } catch (err) {
                ctx.status = 503;
                ctx.body = {
                    status: "error",
                    message: "An error occurred while fetching coins data"
                }
            }
        })
    )
}