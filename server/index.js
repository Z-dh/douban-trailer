const Koa = require('koa')
const app = new Koa()
const ejs = require('ejs')
const ejsTpl= require('./views/index')
app.use(async (ctx,next)=>{
  ctx.type='text/html;charset=utf-8'
  ctx.body=ejs.render(ejsTpl)
})
app.listen(3000)