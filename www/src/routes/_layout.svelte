<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import WaveTop from '../components/WaveTop.svelte';

	export let segment;
</script>

<main class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen">
	<div class="bg-background-primary h-12"></div>
	<div class="shadowesp">
		<div class="ellipsex">
			<header class="text-white gradient md:pt-4 md:pb-16 lg:pt-12 lg:pb-32">
    		<Nav {segment}/>
    		<WaveTop {segment}/>
  		</header>
		</div>
	</div>
  <div class="flex-grow">
    <slot />
  </div>
  <footer class="gradient text-center text-xs">
	  <Footer/>
  </footer>
</main>
