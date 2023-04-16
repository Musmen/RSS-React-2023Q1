import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import { fetch, Request, Response } from 'cross-fetch';

global.fetch = fetch;
global.Request = Request;
global.Response = Response;

expect.extend(matchers);

import { server } from './src/tests-common/msw/server';
beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  })
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
