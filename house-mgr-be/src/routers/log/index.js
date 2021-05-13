const Router = require('@koa/router')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const Log = mongoose.model('Log')

const router = new Router({
  prefix: '/log',
})

router.get('/list', async (ctx) => {
  let {
    page,
    size,
  } = ctx.query;

  page = Number(page);
  size = Number(size);

  const list = await Log
    .find({
      show: true,
    })
    .sort({
      _id: -1,
    })
    .skip((page - 1) * size)
    .limit(size)
    .exec();

  const total = await Log.countDocuments().exec();

  ctx.body = {
    data: {
      list,
      page,
      size,
      total,
    },
    code: 1,
    msg: '获取列表成功',
  };
});


module.exports = router