<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import PostList from '../components/PostList.svelte';
	import HeaderSlot from '../components/HeaderSlot.svelte';
	import Card from '../components/utils/panels/Card.svelte';

	export let posts;
	if (posts != null) {
		posts = posts.slice(0, 3);
	}

</script>

<svelte:head>
	<title>Gabo en la Web</title>
</svelte:head>

<HeaderSlot slotHtml={`
<div class="container mx-auto flex flex-col items-center justify-center text-white pb-12">
	<div class="font-quicksand text-center text-2xl xl:text-3xl">Ahora...</div>
	<div><img class="w-full z-50 h-48" src="big_pc.svg" alt="man-evolution"></div>
	<div class="font-quicksand text-center text-2xl xl:text-3xl">Comentarios, opiniones, y aprendizaje</div>
</div>`}/>

<div class="absolute inset-x-0 flex items-center justify-center h-12">
	<a class="mx-2 mb-10 bg-white rounded-full h-full flex px-6 items-center justify-center shadow-md" href="/acerca-de-gabo">
		<svg class="anim-slider" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13 9 L16 12 L13 15 M16 12 L8 12 M21 12 C21 16.9706 16.9706 21 12 21 C7.02944 21 3 16.9706 3 12 C3 7.02944 7.02944 3 12 3 C16.9706 3 21 7.02944 21 12Z" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		</svg>
		<span class="ml-4 uppercase font-medium text-gray text-md">¿Quién Soy?</span>
	</a>
</div>

<section class="flex flex-col items-center mb-4">
	<div class="container flex justify-center mx-auto w-5/6 sm:w-full xl:w-4/6">
		<Card clazz="flex flex-wrap mt-4 rounded-lg rounded-md" commonClasses="sm:px-1 px-6 py-6">
			<p>Soy Gabo y estoy comprometido a ayudar a aquellos que quieran adentrarse en este maravilloso mundo de tecnología tratando en aplicar diferentes enfoques con diferentes formatos de contenidos</p>
			<p>Aquí encontraras publicaciónes e información acerca de programación y el desarrollo de software en general.</p>
			<p>¿No sabes quién soy yo?. No hay problema, haz clic <a href="acerca-de-gabo">aquí</a> para saber más de mí.</p>
		</Card>
	</div>
</section>

<section class="flex flex-col items-center">
	<PostList {posts} clazz="container flex flex-wrap mx-auto mb-4 w-5/6 sm:w-full xl:w-4/6" cardClass="rounded-lg rounded-md sm:p-2 p-6 m-1 flex flex-col flex-grow flex-shrink w-full md:w-1/3 lg:w-1/4 xl:w-1/4"/>
</section>
