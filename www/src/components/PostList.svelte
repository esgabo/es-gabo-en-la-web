<script>
	import PostCard from './PostCard.svelte';
	export let posts;
	export let title;
	export let cardWClasses;
</script>
<div class="container mx-auto flex justify-center">
	<h1 class="bg-white my-4 px-4 py-4 roundesp shadowesp text-3xl font-bold leading-tight text-center text-gray-800">{title}</h1>
</div>
<div class="container mx-auto flex flex-wrap pt-4 pb-12 lg:w-4/6">

	{#each posts as post}
		<PostCard post={post} cardWClasses={cardWClasses}></PostCard>
	{/each}
</div>
