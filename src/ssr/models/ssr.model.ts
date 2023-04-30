import { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';

export type ServerSideRender = (
  url: string | Partial<Location>,
  options: RenderToPipeableStreamOptions
) => PipeableStream;
