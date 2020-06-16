<script>
	import PostCard from './PostCard.svelte';
	export let posts;
</script>


<div class="container mx-auto flex flex-wrap pt-4 pb-12">
	
	<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Últimas Publicaciones</h1>
	<div class="w-full mb-4">	
		<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
	</div>

	{#each posts as post, i}
		{#if i < 3}
			<PostCard post={post}></PostCard>
		{/if}
	{/each}
</div>