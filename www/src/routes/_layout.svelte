<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import { setContext } from 'svelte';

	export let segment;
</script>

<Header {segment}/>

<main>
	<div>
		<slot/>
	</div>
</main>

<Footer/>
