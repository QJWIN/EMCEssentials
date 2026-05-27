export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method !== "GET") {
      return json({ error: "Method not allowed" }, 405);
    }

    if (url.pathname !== "/emce/latest") {
      return json({ error: "Not found" }, 404);
    }

    return json({
      latestVersion: "0.6.3",
      minecraftVersion: "1.21.11",
      downloadUrl: "https://qjwin.github.io/EMCEssentials/downloads/EMCEssentials-0.6.3.jar",
      changelogUrl: "https://qjwin.github.io/EMCEssentials/changelog.html"
    });
  }
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*"
    }
  });
}
