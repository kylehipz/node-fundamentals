const koa = require('koa');

const app = new koa();

app.use(async (ctx) => {
  console.log('Hello world');
});

app.listen(8080);
