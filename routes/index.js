const router = require('koa-router')();
const ActivitySchema = require('./services/activity');

router.get('/', async function(ctx, next) {
    let activity = await ActivitySchema.find({}).skip(1).limit(10).sort('-create_date');
    ctx.body = {
        title: 'koa2 title'
    };
})
module.exports = router;