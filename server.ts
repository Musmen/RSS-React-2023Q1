import express from 'express';
import { createServer as createViteServer } from 'vite';

import { ServerSideRender } from './src/ssr/models/ssr.model';

const DEFAULT_PORT = 5000;

const createServer = async () => {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const { serverSideRender } = (await vite.ssrLoadModule('/src/ssr/entry-server.tsx')) as {
        serverSideRender: ServerSideRender;
      };

      const stream = serverSideRender(url, { onShellReady });

      function onShellReady() {
        res.setHeader('content-type', 'text/html');
        stream.pipe(res);
      }
    } catch (error: unknown) {
      vite.ssrFixStacktrace(error as Error);
      next(error);
    }
  });

  app.listen(DEFAULT_PORT);
};

createServer();
