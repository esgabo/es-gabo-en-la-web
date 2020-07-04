<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import WaveTop from '../components/WaveTop.svelte';

	export let segment;
</script>

<main class="content-wrapper bg-clg font-sans text-copy-primary leading-normal flex flex-col min-h-screen">
	<Nav {segment}/>
	<div class="shadowesp">
		<header class="text-white ellipsex gradient md:pt-4 md:pb-16 lg:pt-12 lg:pb-32">
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
