addEventListener("fetch", (event) => {
  const response = new Response("Hello World Sonig blading!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});