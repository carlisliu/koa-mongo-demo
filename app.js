const Koa = require('koa');
const koaBody = require('koa-body');

const app = module.exports = new Koa();

const router = require('./routes');

app.use(koaBody({
    jsonLimit: '1kb'
}));

app.use(router.routes()).use(router.allowedMethods());

app.on('error', function(error) {
    console.log('koa error:', error);
});

app.listen(3000);