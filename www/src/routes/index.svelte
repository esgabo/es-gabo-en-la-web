<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import PostList from '../components/PostList.svelte';
	
	export let posts;
	if (posts != null) {
		posts = posts.slice(0, 3);
	}

</script>

<svelte:head>
	<title>Gabo en la Web</title>
</svelte:head>

<section class="bg-white border-b py-8">
	<div class="container max-w-5xl mx-auto m-8">
		<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">¡Bienvenido!</h1>
		<div class="w-full mb-4">	
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
		</div>
	
		<div class="flex flex-wrap p-6 content">
			<p>Soy Gabo y estoy comprometido a ayudar a aquellos que quieran adentrarse en este maravilloso mundo de tecnología tratando en aplicar diferentes enfoques con diferentes formatos de contenidos</p>
			<p>Aquí encontraras publicaciónes e información acerca de programación y el desarrollo de software en general.</p>
			<p>¿No sabes quién soy yo?. No hay problema, haz clic <a href="acerca-de-gabo">aquí</a> para saber más de mí.</p>
		</div>
	</div>
</section>

<section class="bg-white py-8">
	<PostList posts={posts} title={'Últimas Publicaciones'} cardWClasses={'md:w-1/3'}/>
</section>