export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return corsResponse();
    }

    if (request.method !== "GET") {
      return jsonResponse({ error: "Method not allowed" }, 405);
    }

    if (url.pathname !== "/emce/latest") {
      return jsonResponse({ error: "Not found" }, 404);
    }

    return jsonResponse({
      latestVersion: "0.6.5",
      minecraftVersion: "1.21.11",
      loader: "Fabric",
      downloadUrl: "https://qjwin.github.io/EMCEssentials/downloads/EMCEssentials-0.6.5.jar",
      changelogUrl: "https://qjwin.github.io/EMCEssentials/changelog.html"
    }, 200);
  }
};

function corsResponse() {
  return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, OPTIONS",
      "access-control-allow-headers": "content-type"
    }
  });
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*"
    }
  });
}
