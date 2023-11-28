if (!self.define) {
  let e,
    i = {};
  const r = (r, s) => (
    (r = new URL(r + ".js", s).href),
    i[r] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = r), (e.onload = i), document.head.appendChild(e);
        } else (e = r), importScripts(r), i();
      }).then(() => {
        let e = i[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, t) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[c]) return;
    let n = {};
    const o = (e) => r(e, c),
      d = { module: { uri: c }, exports: n, require: o };
    i[c] = Promise.all(s.map((e) => d[e] || o(e))).then((e) => (t(...e), n));
  };
}
define(["./workbox-6db16f92"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "_astro/client.63d571f8.js",
          revision: "890d1d9e25b740b250ac67d75292b8ce",
        },
        {
          url: "_astro/index.e406f2b7.css",
          revision: "cdc8a14b8c7394f9f69315365acb2f73",
        },
        { url: "/", revision: "b444b1302cc8b0f61868613ffb93c23a" },
        { url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        {
          url: "manifest.webmanifest",
          revision: "cac1a2da12c900c6f7242e763e057379",
        },
      ],
      { directoryIndex: "index.html" }
    ),
    e.cleanupOutdatedCaches();
});
