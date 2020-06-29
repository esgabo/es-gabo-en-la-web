<script>
	import PostCommentInput from './PostCommentInput.svelte';

	let reply = false;

	function toggle() {
		reply = !reply;
	}
</script>

{#if reply}
	<PostCommentInput/>
	<button on:click={toggle}>Cancelar</button>
{:else}
	<button on:click={toggle}>Replicar</button>
{/if}