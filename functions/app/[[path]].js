export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  const BACKEND_TARGET = "https://swbotweb.kotoca.net"; 
  
  // "/app" の部分を消して、それ以降のパスを結合する（例: /app/test -> /test）
  const forwardPath = url.pathname.replace(/^\/app/, "");
  const newUrl = BACKEND_TARGET + forwardPath + url.search;

  return fetch(new Request(newUrl, context.request));
}
