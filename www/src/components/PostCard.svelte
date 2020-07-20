<script>
	import FormattedDate from './FormattedDate.svelte';
	import PostMetaData from './PostMetaData.svelte';
	import Card from './utils/panels/Card.svelte';
	import NewPostBadge from './NewPostBadge.svelte';

	export let post;
	export let clazz = '';
</script>

<Card {clazz} header="true" hoverable="true">
	<div slot="header" class="w-full font-bold text-xl text-gray-800">
		<a rel=prefetch href='blog/{post.slug}' class="mr-2">{post.metadata.title}</a>
		<NewPostBadge {post}/>
	</div>
	<p class="text-gray-600 text-xs">
		<PostMetaData {post} displayAuthor={false}/>
	</p>
	<p class="text-base mb-4 mt-2 content">{@html post.metadata.summary}</p>
</Card>
