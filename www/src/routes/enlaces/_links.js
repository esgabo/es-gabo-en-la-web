import rawLinks from '../../../../links/*.json';

const links = rawLinks
	.filter(link => link.active === true)
	.sort((a,b) => a.order - b.order);

export default links;
