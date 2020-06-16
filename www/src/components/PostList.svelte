<script>
	import PostCard from './PostCard.svelte';
	export let posts;
	export let title;
	export let cardWClasses;
</script>


<div class="container mx-auto flex flex-wrap pt-4 pb-12 lg:w-4/6">
	<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{title}</h1>
	<div class="w-full mb-4">	
		<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
	</div>

	{#each posts as post}
		<PostCard post={post} cardWClasses={cardWClasses}></PostCard>
	{/each}
</div>