<script>
	import PostCard from './PostCard.svelte';
	export let posts;
	export let cardClass;
	export let clazz;
</script>

<div class="{clazz}">
{#each posts as post}
	<PostCard {post} clazz={cardClass}></PostCard>
{/each}
</div>
