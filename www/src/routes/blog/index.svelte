<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import PostList from '../../components/PostList.svelte';
	import HeaderSlot from '../../components/HeaderSlot.svelte';

	export let posts;

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
