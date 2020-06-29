<script>
	import PostComment from './PostComment.svelte';
	import PostCommentReply from './PostCommentReply.svelte';

	export let comment;
</script>

<div class="flex-1 bg-white rounded-t rounded-b-none shadow">	
	<div class="w-full text-gray-800 m-4">
		<PostComment {comment}/>

		<PostCommentReply/>
		<div id="replies" class="w-full text-gray-800 px-6 ml-3">
		{#each comment.replies as reply}
			<PostComment comment={reply}/>
		{/each}
		</div>
	</div>
</div>	