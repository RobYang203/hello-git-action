const supertest = require('supertest');
const { server } = require('../routers');

const requestWithSupertest = supertest(server);

describe('test server....', () => {
  it('test [GET] root router', async () => {
    const res = await requestWithSupertest.get('/');

    expect(res.status).toBe(400);
  });
});
