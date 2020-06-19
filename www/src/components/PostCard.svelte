<script>
	import FormattedDate from './FormattedDate.svelte';
	import PostMetaData from './PostMetaData.svelte';
	import NewPostBadge from './NewPostBadge.svelte';

	export let post;
	export let cardWClasses = '';
</script>

<div class="w-full {cardWClasses} p-6 flex flex-col flex-grow flex-shrink">
	<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
		<div class="w-full font-bold text-xl text-gray-800 px-6 mt-6">
			<a rel=prefetch href='blog/{post.slug}' class="mr-2">{post.metadata.title}</a>
			<NewPostBadge {post}/>
		</div>
		<p class="text-gray-600 text-xs px-6">
			<PostMetaData {post} displayAuthor={false}/>
		</p>
		<p class="text-base px-6 mb-4 mt-2 content">{@html post.metadata.summary}</p>
	</div>
	<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
		<div class="flex items-center justify-center">
			<a rel=prefetch href='blog/{post.slug}' class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Ver más</a>
		</div>
	</div>
</div>