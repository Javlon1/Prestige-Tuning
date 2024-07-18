const { SitemapStream, streamToPromise } = require("sitemap");

const { Readable } = require("stream");

export default async (req, res) => {

    const links = [
        { url: "/", changefreq: "daily", priority: 1 },
        { url: "/catalog", changefreq: "daily", priority: 0 },
        { url: "/catalog-detail", changefreq: "daily", priority: 0 },
        { url: "/cart", changefreq: "daily", priority: 0 },
        { url: "/register", changefreq: "daily", priority: 0 },
        { url: "/register-success", changefreq: "daily", priority: 0 },
    ];

    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlStrina = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlStrina)
}