import rawPosts from '../../../../posts/*.md'

const posts = rawPosts
	.map(post => {
		post.html = post.html.replace(/^\t{3}/gm, '');
		post.slug = post.filename.replace(/\.md$/, '');
		post.metadata.published_date = new Date(post.metadata.published_date);
		post.metadata.created_date = new Date(post.metadata.published_date);
	
		return post;
	})
	.filter(post => post.metadata.published === true)
	.sort((a,b) => b.metadata.published_date.getTime() - a.metadata.published_date.getTime()); // desc order

export default posts;
