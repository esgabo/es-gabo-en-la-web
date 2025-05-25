<script context="module">
	import { error } from '@sveltejs/kit';
	import readingTime from 'reading-time'; // Ensure this is installed

	export async function load({ params }) { // Removed fetch, not used for direct .md import
	  try {
	    // Path relative to the /src/routes directory.
	    // Vite's dynamic import needs a path that starts with ./, ../, or / for root.
	    // To reference /src/lib/posts/, we need to go up from /src/routes/blog/[slug]/
	    const postModule = await import(`../../../../lib/posts/${params.slug}.md`);
	    const content = postModule.default; 
	    const metadata = { ...postModule.metadata }; // Clone metadata to safely add properties

	    // Reading time calculation based on available metadata properties
	    if (metadata.source) { // If a remark plugin added raw source to metadata (e.g. 'remark-raw-content')
	        metadata.reading = readingTime(metadata.source);
	    } else if (metadata.wordCount) { // If a remark plugin added wordCount (e.g. 'remark-word-count')
	        // Approximate reading time if only word count is available
	        // This is a simplified approximation; readingTime typically expects full text.
	        const wordsPerMinute = 200; // Average reading speed
	        const minutes = metadata.wordCount / wordsPerMinute;
	        metadata.reading = {
	            text: `${Math.ceil(minutes)} min read`,
	            minutes: minutes,
	            time: minutes * 60 * 1000,
	            words: metadata.wordCount
	        };
	    } else {
	        // Fallback if neither raw source nor word count is available
	        metadata.reading = { text: "N/A" }; // Default placeholder
	        console.warn(`Raw content or word count not available in metadata for reading time calculation for ${params.slug}. Consider adding a remark plugin like 'remark-raw-content' or 'remark-word-count' to your mdsvex config.`);
	    }

	    return {
	      content, // This is the Svelte component rendered from Markdown
	      metadata  // This is the frontmatter
	    };
	  } catch (e) {
	    console.error("Load error in [slug]/+page.svelte:", e); 
	    throw error(404, `Could not find post: ${params.slug}.md. Error: ${e.message}`);
	  }
	}
</script>

<script>
	import PostMetaData from '$lib/components/PostMetaData.svelte';
	import Card from '$lib/components/utils/panels/Card.svelte';
	import HeaderSlot from '$lib/components/HeaderSlot.svelte';

	export let data; 
	// $: post = data.post; // Old structure, post is now data.metadata and data.content
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<HeaderSlot slotHtml={``}/>

{#if data.content && data.metadata}
<section class="flex flex-col items-center mb-4 relative">
	<div class="container flex mx-auto w-5/6 sm:w-full xl:w-4/6">
		<Card clazz="flex flex-wrap mt-4 rounded-lg rounded-md" commonClasses="sm:px-1 px-6 py-2" header="true">
			<h1 slot="header" class="w-full text-5xl sm:text-3xl mx-4 font-bold leading-tighttext-gray-800">{data.metadata.title}</h1>
			<p class="w-full text-gray-600 text-xs">
				<PostMetaData post={{ metadata: data.metadata }} displayTime={false}/>
			</p>

			<div class="flex flex-wrap mt-10">
				<div class="mx-auto content">
				
					<p>{data.metadata.summary}</p>

				{#if (data.metadata.heading_image)}
					<img class="mb-5 mx-auto max-h-screen" alt="Header" src="{data.metadata.heading_image.startsWith('http') ? data.metadata.heading_image : '/' + data.metadata.heading_image }"/>
				{/if}

					<svelte:component this={data.content} />
				</div>
			</div>
		</Card>
	</div>
</section>
{/if}
