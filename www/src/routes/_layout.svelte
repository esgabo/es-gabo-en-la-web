<script>
  import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte"
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
  import { stores } from "@sapper/app"

	export let segment;
</script>

<GoogleAnalytics {stores} id="ANALYTICS_ID"/>
<Header {segment}/>

<main>
	<div>
		<slot/>
	</div>
</main>

<Footer/>
