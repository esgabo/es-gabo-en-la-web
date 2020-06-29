import posts from "./blog/_posts";
const RSS = require("rss");

const DEV_NAME = "Gabriel Espinel";
const BASE_URL = "https://esgabo.dev";
const BLOG_RELATIVE_PATH = "blog";
const FEED_TTL_MINUTES = 60;

export async function get(req, res, next) {
      
    try {
      
        res.setHeader("Cache-Control", `max-age=0, s-max-age=${FEED_TTL_MINUTES * 60}`);
        res.setHeader("Content-Type", "application/xml");
        
        const feed = new RSS({
            title: 'Es Gabo en la Web',
            description: 'Sitio web personal de Gabo (Gabriel Espinel), desarrollador de software apasionado por la programacion',
            feed_url: `${BASE_URL}/rss.xml`,
            site_url: BASE_URL,
            image_url: `${BASE_URL}/logo-192.png`,
            docs: "http://blogs.law.harvard.edu/tech/rss",
            managingEditor: DEV_NAME,
            webMaster: DEV_NAME,
            copyright: `Copyright 2020 ${DEV_NAME}. Todos los derechos reservados`,
            language: "es",
            pubDate: new Date(),
            ttl: FEED_TTL_MINUTES
          });

        posts.forEach(({ metadata, slug, html }) => {
            const itemUrl = `${BASE_URL}/${BLOG_RELATIVE_PATH}/${slug}`;
            console.log(itemUrl);
            
            feed.item({
                title: metadata.title,
                url: itemUrl,
                description: metadata.description,

                categories: metadata.tags,
                date: metadata.published_date,
                image: metadata.heading_image,
                custom_namespaces: {
                  content: "http://purl.org/rss/1.0/modules/content/",
                  dc: "http://purl.org/dc/elements/1.1/"
                },
                custom_elements: [
                  {
                    "content:encoded": `${html} <br /><em>Publicado originalmente en <a href="${itemUrl}">esgabo.dev</a>.</em>`
                  }
                ]
              });
          });
          
        res.end(feed.xml())
    } catch (error) {
        console.log(error);
        
        res.writeHead(404, {
            "Content-Type": "application/json"
        });

        res.end(
            JSON.stringify({
                message: `Not found`
            })
        );
    }
}
