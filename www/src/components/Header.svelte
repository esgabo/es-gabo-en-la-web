<script>
	import Nav from './Nav.svelte';
	import Ellipse from './Ellipse.svelte';
	import { headerSlotStore } from '../stores/ui';
	  
	export let segment;
</script>

<header>
	<Nav {segment}/>
	<Ellipse>
	{#if $headerSlotStore}
		{@html $headerSlotStore}
	{/if}
	</Ellipse>
</header>