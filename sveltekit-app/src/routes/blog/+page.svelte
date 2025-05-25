<script context="module">
	// import { error } from '@sveltejs/kit';
	export async function load() { // Removed fetch, not used for import.meta.glob
		// Path relative to the /src/routes/blog/ directory.
		// Vite's import.meta.glob expects paths relative to the current file.
		const postFiles = import.meta.glob('../../../../lib/posts/*.md');
		
		const posts = await Promise.all(
		  Object.entries(postFiles).map(async ([path, resolver]) => {
		    const result = await resolver(); // result is { metadata: ..., default: ... }
		    const metadata = result.metadata;
		    // Extract slug from path: e.g., ../../../../lib/posts/my-post.md -> my-post
		    const slug = path.match(/([\w-]+)\.md$/i)?.[1] ?? null;
		    return { ...metadata, slug }; // Ensure 'slug' is part of the returned object for linking
		  })
		);

		// Sort posts by date (descending), using 'published_date' from Sapper frontmatter
		posts.sort((a, b) => new Date(b.published_date).getTime() - new Date(a.published_date).getTime());
		
		return { posts };
	}
</script>

<script>
	import PostList from '$lib/components/PostList.svelte'; // Adjusted path
	import HeaderSlot from '$lib/components/HeaderSlot.svelte'; // Adjusted path

	export let data; // Changed to data
	$: posts = data.posts; // Extract posts from data

</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<HeaderSlot slotHtml={`
<div class="container mx-auto flex flex-col items-center justify-center text-white pt-12 pb-32">
	<div class="font-quicksand font-semibold text-center text-5xl xl:text-6xl">Publicaciones</div>
	<div class="font-quicksand text-center text-2xl xl:text-3xl">Comentarios, opiniones, y aprendizaje</div>
</div>`}/>

<section class="flex flex-col items-center mb-4 relative -mt-32">
	<PostList {posts} clazz="container flex flex-wrap mx-auto mb-4 w-5/6 sm:w-full xl:w-4/6" cardClass="rounded-lg rounded-md p-6 m-1 flex flex-col flex-grow flex-shrink w-full"/>
</section>
