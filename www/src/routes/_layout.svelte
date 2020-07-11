<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import WaveTop from '../components/WaveTop.svelte';

	export let segment;
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
</svelte:head>

<main class="content-wrapper bg-clg font-inter text-copy-primary leading-normal flex flex-col min-h-screen">
	<Nav {segment}/>
	<div class="shadowesp">
		<header class="text-white ellipsex gradient mb-0 pb-0 pt-4 md:pt-4 md:pb-16 lg:pt-4 lg:pb-16">
    	<WaveTop {segment}/>
  	</header>
	</div>
  <div class="flex-grow">
    <slot />
  </div>
  <footer class="gradient text-center text-xs">
	  <Footer/>
  </footer>
</main>
