import { getStore } from "@netlify/blobs";
const ok = (r) => { const p = process.env.ADMIN_PASSWORD; return !!p && (r.headers.get("authorization") || "") === "Bearer " + p; };
const no = () => new Response("Unauthorized", { status: 401 });
export default async (req) => {
  const path = new URL(req.url).pathname.replace(/^\/api\/?/, "");
  const s = getStore("site");
  if (path === "login") return ok(req) ? new Response("ok") : no();
  if (path === "data") {
    if (req.method === "GET") return Response.json((await s.get("data", { type: "json" })) || {}, { headers: { "Cache-Control": "no-store" } });
    if (req.method === "PUT") {
      if (!ok(req)) return no();
      const d = await req.json();
      if (!d || !d.s || !Array.isArray(d.pkgs)) return new Response("Bad data", { status: 400 });
      await s.setJSON("data", d);
      return new Response("ok");
    }
  }
  if (path === "img" && req.method === "POST") {
    if (!ok(req)) return no();
    const buf = await req.arrayBuffer();
    if (buf.byteLength > 5e6) return new Response("Too large", { status: 413 });
    const id = crypto.randomUUID().replace(/-/g, "");
    await s.set("img-" + id, buf);
    return Response.json({ id });
  }
  if (path.startsWith("img/") && req.method === "GET") {
    const b = await s.get("img-" + path.slice(4).replace(/[^a-f0-9]/g, ""), { type: "arrayBuffer" });
    if (!b) return new Response("Not found", { status: 404 });
    return new Response(b, { headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=31536000, immutable" } });
  }
  return new Response("Not found", { status: 404 });
};
export const config = { path: ["/api/data", "/api/login", "/api/img", "/api/img/*"] };
