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
	import Card from '../../components/utils/panels/Card.svelte';
	import HeaderSlot from '../../components/HeaderSlot.svelte';

	export let post;
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>

<HeaderSlot slotHtml={``}/>

<section class="flex flex-col items-center mb-4 relative">
	<div class="container flex mx-auto w-5/6 sm:w-full xl:w-4/6">
		<Card clazz="flex flex-wrap mt-4 rounded-lg rounded-md" commonClasses="px-6 py-2" header="true">
			<h1 slot="header" class="w-full text-5xl sm:text-3xl mx-4 font-bold leading-tighttext-gray-800">{post.metadata.title}</h1>
			<p class="w-full text-gray-600 text-xs">
				<PostMetaData {post} displayTime={false}/>
			</p>

			<div class="flex flex-wrap mt-10">
				<div class="mx-auto content">
				
					<p>{post.metadata.summary}</p>

				{#if (post.metadata.heading_image)}
					<img class="mb-5 mx-auto max-h-screen" alt="Header" src="{post.metadata.heading_image}"/>
				{/if}

					{@html post.html}
				</div>
			</div>
		</Card>
	</div>
</section>
