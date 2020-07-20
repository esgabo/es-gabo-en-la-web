<script>
  import { createEventDispatcher } from 'svelte';
  
  export let clazz = '';
  export let commonClasses = '';
  export let header = false;
  export let footer = false;
  export let hoverable = false;
  export let clickable = false;

  const dispatch = createEventDispatcher();

  let extraCss = '';
  
  if (hoverable) {
    extraCss += ' hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out';
  }

  if (clickable) {
    extraCss += ' cursor-pointer';
  }

  const handleClick = () => {
    if (clickable) {
      dispatch('click');
    }
  };
</script>

<div class="bg-white overflow-hidden shadow {commonClasses} {clazz} {extraCss}" on:click={handleClick}>
  {#if header}
  <div class="border-b border-gray-200 {commonClasses}">
    <slot name="header"/>
  </div>
  {/if}

  <div class="content justify-center {commonClasses}">
    <slot/>
  </div>
  
  {#if footer}
  <div class="border-t border-gray-200 {commonClasses}">
    <slot name="footer"/>
  </div>
  {/if}
</div>