import { renderToReadableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./root";

export default async function handleRequest(
  _request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
) {
  const helmetContext = {} as { helmet: HelmetServerState };
  const url = new URL(_request.url);

  const stream = await renderToReadableStream(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url.pathname}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
    {
      signal: _request.signal,
      onError(error: unknown) {
        console.error(error);
        responseStatusCode = 500;
      },
    }
  );

  await stream.allReady;

  responseHeaders.set("Content-Type", "text/html; charset=utf-8");

  return new Response(stream, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
