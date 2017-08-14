const router = require('koa-router')();
const ActivitySchema = require('../services/activity');

router.get('/', async function(ctx, next) {
    let activity = await ActivitySchema.find({})/*.then(function (res) {
        return res;
    });*///.skip(1).limit(10).sort('-create_date');
    ctx.body = {
        title: 'koa2 title'
    };

    /*await ActivitySchema.find({}).skip(1).limit(10).sort('-create_date').then(function() {
        ctx.res.end('ok')
    })*/
})
module.exports = router;