<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import PostMetaData from '../../components/PostMetaData.svelte';
	export let post;
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>

<section class="bg-clg mt-esp mx-2 pt-0 pb-8">

	<div class="container relative bg-white mx-auto flex flex-wrap pt-4 pb-12 shadow-md">

		<h1 class="w-full my-2 text-5xl mx-4 font-bold leading-tight text-center text-gray-800">{post.metadata.title}</h1>
		<p class="w-full my-2 text-center text-gray-800">
			<PostMetaData {post} displayTime={false}/>
		</p>
		<div class="w-full">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
		</div>

		<div class="flex flex-wrap mt-5">
			<div class="mx-auto content w-4/6">
			{#if (post.metadata.heading_image)}
			<img class="mb-5 w-3/4 mx-auto" alt="Header" src="{post.metadata.heading_image}"/>
			{/if}

				{@html post.html}
			</div>
		</div>
	</div>
</section>
