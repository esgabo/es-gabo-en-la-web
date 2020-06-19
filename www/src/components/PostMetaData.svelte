<script>
	import FormattedDate from './FormattedDate.svelte';

	export let post;
	export let displayAuthor = true;
	const readMins = Math.ceil(post.metadata.reading.minutes);
</script>

<span>Publicado: <FormattedDate date={post.metadata.published_date} displayTime={false}/> · Lectura: {readMins} mins.</span>

{#if displayAuthor} 
<br/>
<span>Autor: {post.metadata.author}</span>
{/if}
