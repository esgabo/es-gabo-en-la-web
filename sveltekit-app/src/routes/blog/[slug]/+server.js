import { json, error } from '@sveltejs/kit'; // Added imports
import posts from '../_posts.js'; // Adjusted path for _posts.js

const lookup = new Map();
posts.forEach(post => {
	lookup.set(post.slug, post); // Store the post object directly
});

export async function GET({ params }) { // Changed signature
	// the `slug` parameter is available because
	// this file is now [slug]/+server.js
	const { slug } = params;

	if (lookup.has(slug)) {
		// SvelteKit's json utility handles Content-Type and stringification.
		return json(lookup.get(slug));
	} else {
		// Use SvelteKit's error helper for 404
		throw error(404, 'Not found');
	}
}
