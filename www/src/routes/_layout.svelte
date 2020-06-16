<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import WaveTop from '../components/WaveTop.svelte';

	export let segment;
</script>

<main class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen">
  <header class="text-white gradient">
    <Nav {segment}/>
    <WaveTop {segment}/>
  </header>
  <div class="flex-grow">
    <slot />
  </div>
  <footer class="gradient text-center text-xs">
	  <Footer/>
  </footer>
</main>
