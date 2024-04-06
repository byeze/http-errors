# @ezee/http-errors

> Create beautiful and consistent HTTP errors with ease.

## Install

### With npm

```bash
npm install @ezee/http-errors
```

### With yarn

```bash
yarn add @ezee/http-errors
```

### With pnpm

```bash
pnpm add @ezee/http-errors
```

## Usage

```ts
import httpErrors from '@ezee/http-errors';

const error = new httpErrors.Notfound({
  message: 'User not found',
  code: 'USER_NOT_FOUND',
  meta: {
    userId: 123,
  },
});
```

### How to instanciate an error

```ts
const error = new httpErrors.<ErrorName>(options);
```

### Options

- `message` - The error message.
- `code` - The error code.
- `meta` - Additional information about the error. In `object` format. (optional)

## Available Errors

- BadRequest
- Unauthorized
- Forbidden
- Notfound
- MethodNotAllowed
- Conflict
- InternalServerError
- NotImplemented
- ServiceUnavailable
- GatewayTimeout
- PaymentRequired

## Examples

### With express

```ts
import express from 'express';
import httpErrors from '@ezee/http-errors';

const app = express();

app.get('/user/:id', (req, res, next) => {
  const { id } = req.params;

  if (id !== '123') {
    return next(
      new httpErrors.Notfound({
        message: 'User not found',
        code: 'USER_NOT_FOUND',
        meta: {
          userId: id,
        },
      })
    );
  }

  res.json({ id, name: 'John Doe' });
});
```

### With koa

```ts
import Koa from 'koa';
import httpErrors from '@ezee/http-errors';

const app = new Koa();

app.use(async (ctx, next) => {
  const { id } = ctx.params;

  if (id !== '123') {
    ctx.throw(
      new httpErrors.Notfound({
        message: 'User not found',
        code: 'USER_NOT_FOUND',
        meta: {
          userId: id,
        },
      })
    );
  }

  ctx.body = { id, name: 'John Doe' };
});
```
