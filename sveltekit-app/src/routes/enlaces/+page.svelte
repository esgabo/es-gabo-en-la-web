<script context="module">
	// import { error } from '@sveltejs/kit';
	export async function load() { // Removed fetch, not used for import.meta.glob
		// Path relative to the /src/routes/enlaces/ directory.
		// Vite's import.meta.glob expects paths relative to the current file.
		const linkFiles = import.meta.glob('../../../../lib/links/*.json');
		
		const links = await Promise.all(
		  Object.entries(linkFiles).map(async ([path, resolver]) => {
		    const linkModule = await resolver();
		    // Vite's import.meta.glob for JSON typically gives the content as the default export.
		    // If the JSON files are not structured with a default export (i.e. they are just plain JSON objects),
		    // then linkModule itself would be the object.
		    // Assuming linkModule.default is correct based on common patterns or if JSON files are structured as ES modules.
		    // If it's plain JSON, it might just be `return linkModule;`
		    return linkModule.default; 
		  })
		);
		// Add any sorting or further processing if needed, e.g., by a property in the JSON objects.
		// links.sort((a,b) => a.order - b.order); // Example sort
		return { links };
	}
</script>

<script>
	// Assuming Card and HeaderSlot are general components, now in $lib
	import Card from '$lib/components/utils/panels/Card.svelte'; // Adjusted path
	import HeaderSlot from '$lib/components/HeaderSlot.svelte'; // Adjusted path
	// LinkTypeImage is specific to this route, path remains relative
  import LinkTypeImage from './_components/LinkTypeImage.svelte'; 
  
	export let data; // Changed to data
	$: links = data.links; // Extract links from data
</script>

<svelte:head>
	<title>Enlaces</title>
</svelte:head>

<HeaderSlot slotHtml={``}/>

<section class="flex items-center mb-4 relative">
  <div class="container flex mx-auto w-1/2 sm:w-full">
    <ul class="mt-3 grid grid-cols-1 gap-5 w-full">
      {#each links as link}
      <li>
        <a href="{link.link}" class="col-span-1 flex items-center bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
          <LinkTypeImage type="{link.type}"/>
          <div class="flex-1 px-4 py-2 truncate">
            <span class="text-gray-900 text-sm leading-5 font-medium hover:text-gray-600 transition ease-in-out duration-150">{link.title}</span>
            <p class="text-sm leading-5 text-gray-500">{link.subtitle}</p>
          </div>
        </a>
      </li>
      {/each}
    </ul>
	</div>
</section>