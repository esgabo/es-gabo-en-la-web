import { json } from '@sveltejs/kit'; // Added import
import links from './_links.js';

// The data should be prepared directly, json() will stringify it.
const preparedLinks = links.map(link => {
	return {...link};
});

export async function GET() { // Changed signature
	// SvelteKit's json utility handles Content-Type and stringification.
	return json(preparedLinks);
}