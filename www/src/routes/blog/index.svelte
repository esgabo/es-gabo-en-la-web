<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import PostList from '../../components/PostList.svelte';

	export let posts;

</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section class="bg-clp py-8">
	<PostList posts={posts} title={'Publicaciones'}/>
</section>
