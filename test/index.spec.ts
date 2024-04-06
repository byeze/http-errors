import httpErrors from '../src';

describe('HttpErrors', () => {
  it('should build an error message', () => {
    const message = 'Hello';
    const code = 'code';
    const meta = {
      key: 'value',
    };

    const result = new httpErrors.BadRequest({
      message,
      code,
      meta,
    });

    expect(result.message).toMatch(message);
    expect(result.code).toMatch(code);
    expect(result.status).toBe(400);
    expect(result.meta).toMatchObject(meta);
    expect(result).toBeInstanceOf(Error);
  });
});
