<script>
  	import { onMount } from 'svelte';
	import PostCommentBlock from './PostCommentBlock.svelte';
	import PostCommentInput from './PostCommentInput.svelte';

	export let post;
	let comments = [];

	onMount(() => {


		let commentsRef = window.firestore.collection('posts').doc(post.slug).collection("comments");
		
		commentsRef.onSnapshot(collection => {
			if (collection) {

				// initialization
				const docs = collection.docs.filter(doc => doc.exists);
				const docsById = {};
				const rootComments = [];
				docs.forEach(doc => {
					const data = doc.data();
					data.replies = [];
					docsById[doc.id] = data;
					
					if (!data.parent) {
						rootComments.push(data);
					}
				});	
				
				// linking
				docs.forEach(doc => {
					const data = doc.data();
					if (data.parent) {
						docsById[data.parent.id].replies.push(docsById[doc.id]);
						data.parent = null;
					}
				});	
				
				comments = rootComments;
			}
		});
		
	});
</script>

<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow mb-5">	
	<PostCommentInput/>	
</div>	

{#each comments as comment}
	<PostCommentBlock {comment}/>
{/each}