import rawPosts from '../../../../posts/*.md'

const posts = rawPosts
	.map(post => {
		const html = post.html.replace(/^\t{3}/gm, '');
		const slug = post.filename.replace(/\.md$/, '');
		const date = new Date(post.metadata.date);
	
		return {...post.metadata, slug, date, html};
	})
	.sort((a,b) => a.date.getTime() - b.date.getTime());

export default posts;
