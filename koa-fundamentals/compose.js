const koa = require('koa');
const compose = require('koa-compose');

const app = new koa();

const port = 8080;

const random = async (ctx, next) => {
  if ('/random' === ctx.path) {
    ctx.body = Math.floor(Math.random() * 10);
  } else {
    await next();
  }
};

const backwards = async (ctx, next) => {
  if ('/back' === ctx.path) {
    ctx.body = 'retupmoc';
  } else {
    await next();
  }
};

const pi = async (ctx, next) => {
  if ('/pi' == ctx.path) {
    ctx.body = String(Math.PI);
  } else {
    await next();
  }
};

const middlewares = compose([random, backwards, pi]);

app.use(middlewares);

app.listen(port, () => console.log(`Started on port ${port}`));
