<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`enlaces.json`).then(r => r.json()).then(links => {
			return { links };
		});
	}
</script>

<script>
	import Card from '../../components/utils/panels/Card.svelte';
  import HeaderSlot from '../../components/HeaderSlot.svelte';
  import LinkTypeImage from './_components/LinkTypeImage.svelte';
  
	export let links;
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