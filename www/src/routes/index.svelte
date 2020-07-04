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

<div class="absolute inset-x-0 flex items-center justify-center h-12">
	<a class="mx-2 mb-10 bg-white rounded-full h-full flex px-6 items-center justify-center shadowesp" href="###">
		<svg class="anima" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13 9 L16 12 L13 15 M16 12 L8 12 M21 12 C21 16.9706 16.9706 21 12 21 C7.02944 21 3 16.9706 3 12 C3 7.02944 7.02944 3 12 3 C16.9706 3 21 7.02944 21 12Z" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		</svg>
		<span class="ml-4 uppercase font-medium text-clg text-md">Hola Mundo</span>
	</a>
</div>

<section class="bg-clg py-8 flex flex-col items-center">
	<h1 class="absolute mt-8 z-10 roundesp bg-white text-3xl font-bold px-2 py-2 text-gray-800 shadowesp">¡Bienvenido!</h1>
	<div class="container flex justify-center mx-auto m-8">
		<div class="flex flex-wrap bg-white p-12 mx-4 mt-8 content shadowesp roundesp">
			<p>Soy Gabo y estoy comprometido a ayudar a aquellos que quieran adentrarse en este maravilloso mundo de tecnología tratando en aplicar diferentes enfoques con diferentes formatos de contenidos</p>
			<p>Aquí encontraras publicaciónes e información acerca de programación y el desarrollo de software en general.</p>
			<p>¿No sabes quién soy yo?. No hay problema, haz clic <a href="acerca-de-gabo">aquí</a> para saber más de mí.</p>
		</div>
	</div>
</section>

<section class="bg-clg py-8">
	<PostList posts={posts} title={'Últimas Publicaciones'} cardWClasses={'md:w-1/3'}/>
</section>
