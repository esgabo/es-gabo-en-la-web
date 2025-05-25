<script>
	export let post;

	const timeDiff = new Date().getTime() - new Date(post.metadata.published_date).getTime();
	const isNew = timeDiff < 604800000; // 1 Week
</script>

{#if isNew} 
	<span class="badge-gabo-orange">Nuevo</span>
{/if}