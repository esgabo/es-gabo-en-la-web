import { json } from '@sveltejs/kit'; // Added import
import posts from './_posts.js';

// The data should be prepared directly, json() will stringify it.
const preparedPosts = posts.map(post => {
	// Assuming _posts.js provides the necessary structure for each post.
	// If 'html' or other large fields are not needed for the list view,
	// they could be omitted here for optimization.
	return {
		title: post.metadata.title,
		slug: post.slug,
		metadata: post.metadata,
		// Add other fields if needed by the client that fetches /blog
	};
});

export async function GET() { // Changed signature
	// SvelteKit's json utility handles Content-Type and stringification.
	return json(preparedPosts);
}