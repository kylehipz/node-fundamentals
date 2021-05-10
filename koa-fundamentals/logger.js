const koa = require('koa');
const app = new koa();

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// log ctx req/res
app.use(async (ctx) => {
  console.log(`Request: ${ctx.request}`);
  console.log(`Response: ${ctx.response}`);

  ctx.body = `Hello world`;
});

app.listen(3000, () => `App up on 3000`);
