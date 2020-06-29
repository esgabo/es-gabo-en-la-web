import posts from "./blog/_posts";
const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require('fs');
const path = require('path');

const BASE_URL = "https://esgabo.dev";
const BLOG_RELATIVE_PATH = "/blog";
const FS_STATIC_ROUTES_BASE_PATH = "./src/routes";

// walks the file system looking for static routes
function walkStaticRoutes(routes, currentRelPath = '') {
    fs.readdirSync(FS_STATIC_ROUTES_BASE_PATH + '/' + currentRelPath, { withFileTypes: true }).forEach(dirent => {
        if (dirent.isDirectory()) {
            walkStaticRoutes(routes, `${currentRelPath}/${dirent.name}`);
        } else if (dirent.isFile()) {
            const filename = dirent.name.split('.')[0]; // no extension
            //ignore hidden routes (_), sitemap file, and parameterized routes
            if (filename.charAt(0) !== '_' && filename !== 'sitemap' && !filename.includes('[')) { 
                if (filename === 'index') {
                    routes.push(`${currentRelPath}`);
                } else {
                    routes.push(`${currentRelPath}/${filename}`);
                }
            }
        }
      });
}

// turns string route into SiteMap object with necessary configuration
const toSitemapConfigObject = (route) => {
    const siteUrl = {url: route, changefreq: "monthly", priority: 0.5}; //default config

    if (route === BLOG_RELATIVE_PATH) {
        siteUrl.priority = 0.7;
        siteUrl.changefreq = 'weekly';

    } else if (route.startsWith(BLOG_RELATIVE_PATH)) {
        siteUrl.priority = 0.85;
    } 

    return siteUrl
};


function toSitemapPromise(sitemapConfig) {
    const stream = new SitemapStream( { hostname: BASE_URL } );
    sitemapConfig.forEach( route => stream.write( route ) );
    stream.end();
    
    return streamToPromise(stream);
}

export async function get(req, res, next) {
      
    try {
      
        const staticRoutes = [];
        walkStaticRoutes(staticRoutes);

        const blogRoutes = posts.map(({ slug }) => `${BLOG_RELATIVE_PATH}/${slug}/`);

        const uniqueRoutes = [...new Set([...staticRoutes, ...blogRoutes])].sort();
        const siteRoutes = uniqueRoutes.map(toSitemapConfigObject);
                
        res.setHeader("Cache-Control", `max-age=0, s-max-age=${3600}`); // 1 hour
        res.setHeader("Content-Type", "application/xml");
        
        const sitemap = await toSitemapPromise(siteRoutes);
        res.end(sitemap.toString());

    } catch (error) {

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
