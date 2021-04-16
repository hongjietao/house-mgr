const Router = require('@koa/router')
const mongoose = require('mongoose')

const User = mongoose.model('User')

const router = new Router({
  prefix: '/auth',
})

router.post('/register', async (ctx) => {
  console.log(ctx.request.body);
  const { account, password } = ctx.request.body;

  // Todo
  // 校验账号密码是否符合逻辑
  const one = User.findOne({account}).exec();
  if(one) {
    ctx.body = {
      code: 0,
      msg: '账户已存在',
      data: null,
    }
    return 
  }

  const user = new User({
    account,
    password,
  })

  const res = await user.save()

  ctx.body = {
    code: 1,
    msg: '注册成功',
    data: res,
  }
})

router.get('/ login', async (ctx) => {
  ctx.body = '登录成功'
})

module.exports = router