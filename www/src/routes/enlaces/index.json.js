import links from './_links.js';

const contents = JSON.stringify(links.map(link => {
	return {...link};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}