// Redirect the bare domain to www so Google sees one address per page.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === "skiresortguide.info") {
    url.hostname = "www.skiresortguide.info";
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
