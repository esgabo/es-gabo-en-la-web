import { SitemapStream, streamToPromise } from "sitemap"; // ESM import
import fs from 'fs'; // ESM import
import path from 'path'; // ESM import
import posts from "../../blog/_posts.js"; // Corrected path

const BASE_URL = "https://esgabo.dev"; // Ensure this is correct for your production environment
const BLOG_RELATIVE_PATH = "/blog";
// Assuming this path is relative to the project root for fs operations
const FS_STATIC_ROUTES_BASE_PATH = "src/routes"; 

// WARNING: This function is Sapper-specific and will likely not work correctly in SvelteKit
// as it relies on Sapper's file naming conventions (index.svelte, about.svelte etc.)
// and does not understand SvelteKit's +page.svelte convention or directory-based routes.
// This will need significant refactoring for a proper SvelteKit sitemap.
function walkStaticRoutes(routes, currentRelPath = '') {
    // Construct absolute path for fs operations, assuming process.cwd() is project root
    const currentAbsolutePath = path.join(process.cwd(), FS_STATIC_ROUTES_BASE_PATH, currentRelPath);
    try {
        fs.readdirSync(currentAbsolutePath, { withFileTypes: true }).forEach(dirent => {
            if (dirent.isDirectory()) {
                // Exclude directories that are SvelteKit route groups or private Sapper folders
                if (!dirent.name.startsWith('(') && !dirent.name.startsWith('_')) {
                    walkStaticRoutes(routes, path.join(currentRelPath, dirent.name));
                }
            } else if (dirent.isFile()) {
                const filename = dirent.name.split('.')[0]; // no extension
                // This logic is Sapper-specific and will not correctly identify SvelteKit pages
                if (filename.charAt(0) !== '_' && filename !== 'sitemap' && !filename.includes('[')) { 
                    if (filename === 'index') {
                        routes.push(`${currentRelPath}`);
                    } else {
                        // This will create incorrect routes for SvelteKit (e.g. /about instead of /about/)
                        routes.push(`${currentRelPath}/${filename}`);
                    }
                }
            }
          });
    } catch (err) {
        console.warn(`Could not read directory for sitemap: ${currentAbsolutePath}`, err.message);
    }
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

export async function GET() { // Changed signature
    try {
        const staticRoutes = [];
        // WARNING: walkStaticRoutes is Sapper-specific and needs refactoring for SvelteKit.
        // The current implementation will likely produce an inaccurate or empty list of static routes.
        walkStaticRoutes(staticRoutes); 

        const blogRoutes = posts.map(({ slug }) => `${BLOG_RELATIVE_PATH}/${slug}`); // Removed trailing slash for consistency

        // Ensure all routes start with a slash and are unique
        const uniqueRoutes = [...new Set([...staticRoutes, ...blogRoutes]
            .map(r => r.startsWith('/') ? r : `/${r}`)
            .map(r => r.length > 1 && r.endsWith('/') ? r.slice(0, -1) : r) // Remove trailing slash unless it's just "/"
            .filter(r => r) // Remove empty strings if any
        )].sort();
        
        const siteRoutes = uniqueRoutes.map(toSitemapConfigObject);
                
        const sitemap = await toSitemapPromise(siteRoutes);
        return new Response(sitemap.toString(), {
            headers: {
                "Cache-Control": `max-age=0, s-max-age=${3600}`, // 1 hour
                "Content-Type": "application/xml"
            }
        });
    } catch (e) {
        console.error("Failed to generate sitemap:", e);
        return new Response(JSON.stringify({ message: `Failed to generate sitemap` }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
