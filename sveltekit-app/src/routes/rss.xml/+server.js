import RSS from "rss"; // Use ESM import
import posts from "../../blog/_posts.js"; // Corrected path to _posts.js
// import { error as kitError } from '@sveltejs/kit'; // For SvelteKit specific error helper

const DEV_NAME = "Gabriel Espinel";
const BASE_URL = "https://esgabo.dev"; // Ensure this is correct for your production environment
const BLOG_RELATIVE_PATH = "blog";
const FEED_TTL_MINUTES = 60;

export async function GET() { // Changed signature
      
    try {
        const feed = new RSS({
            title: 'Es Gabo en la Web', // Consider making this a const
            description: 'Sitio web personal de Gabo (Gabriel Espinel), desarrollador de software apasionado por la programacion', // Consider making this a const
            feed_url: `${BASE_URL}/rss.xml`, // Make sure BASE_URL is correct
            site_url: BASE_URL, // Make sure BASE_URL is correct
            image_url: `${BASE_URL}/logo-192.png`, // Make sure this path is valid in static
            docs: "http://blogs.law.harvard.edu/tech/rss", // Standard RSS doc link
            managingEditor: DEV_NAME,
            webMaster: DEV_NAME,
            copyright: `Copyright ${new Date().getFullYear()} ${DEV_NAME}. Todos los derechos reservados`, // Dynamic year
            language: "es",
            pubDate: new Date(), // Or the date of the latest post
            ttl: FEED_TTL_MINUTES
          });

        posts.forEach(({ metadata, slug, html }) => {
            const itemUrl = `${BASE_URL}/${BLOG_RELATIVE_PATH}/${slug}`;
            // Ensure heading_image path is absolute if it's a local static path, or already a full URL
            const headingImageSrc = metadata.heading_image 
                ? (metadata.heading_image.startsWith('http') ? metadata.heading_image : `${BASE_URL}${metadata.heading_image.startsWith('/') ? '' : '/'}${metadata.heading_image}`)
                : '';
            const headingImgTag = headingImageSrc ? `<img src="${headingImageSrc}" alt="heading-image" /><br />` : '';

            feed.item({
                title: metadata.title,
                url: itemUrl,
                description: metadata.description, // Sapper's metadata.description, ensure it's plain text for RSS
                categories: metadata.tags, // Assuming tags is an array of strings
                date: metadata.published_date, // Ensure this is a valid Date object or string for RSS
                // image: metadata.heading_image, // 'image' in feed.item is for enclosure, not typically the post image directly here
                custom_namespaces: { // Keep these if your feed reader uses them
                  content: "http://purl.org/rss/1.0/modules/content/",
                  dc: "http://purl.org/dc/elements/1.1/" // For Dublin Core metadata
                },
                custom_elements: [ // For including HTML content
                  {
                    "content:encoded": {
                      _cdata: `${headingImgTag} ${html} <br /><em>Publicado originalmente en <a href="${itemUrl}">esgabo.dev</a>.</em>`
                    }
                  }
                ]
              });
          });
          
        return new Response(feed.xml({ indent: true }), { // Added indent for readability
            headers: {
                "Cache-Control": `max-age=0, s-max-age=${FEED_TTL_MINUTES * 60}`, // s-maxage for CDN caching
                "Content-Type": "application/rss+xml" // Correct MIME type for RSS
            }
        });
    } catch (e) { // Renamed error to e to avoid conflict if using kitError
        console.error("Failed to generate RSS feed:", e); // Log the actual error
        // Using SvelteKit's error helper for consistency is an option: 
        // throw kitError(500, 'Failed to generate RSS feed');
        // For now, returning a Response object similar to Sapper's behavior for this specific case.
        return new Response(JSON.stringify({ message: `Failed to generate RSS feed` }), {
            status: 500, // 500 is more appropriate for server-side failure
            headers: { "Content-Type": "application/json" },
        });
    }
}
