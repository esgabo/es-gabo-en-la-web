<script>
	import PostCard from './PostCard.svelte';
	export let posts;
	export let title;
	export let cardWClasses;
</script>

<div class="container relative mt-about mx-auto flex flex-wrap pt-4 pb-8 lg:w-4/6">

	{#each posts as post}
		<PostCard post={post} cardWClasses={cardWClasses}></PostCard>
	{/each}
</div>
