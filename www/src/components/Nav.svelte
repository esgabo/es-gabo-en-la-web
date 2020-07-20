<script>
	import { getContext } from 'svelte';
  
	export let segment;
</script>

<style>
  a[aria-current] {
    background-color:#ff592c;
  }
</style>

<div class="gradient relative z-30 text-white">
  <div class="container mx-auto px-4">
    <div class="py-6 flex items-center justify-between">
      <a class="flex items-center" href="/">
        <img class="h-6 fill-current inline pr-2" src="logo_naranja.svg" alt="logo">
        <div class="uppercase tracking-widest font-bold font-quicksand text-xl">GABO</div>
      </a>
      <div class="xl:-mx-2 flex items-center">

        <div class="xl:px-2">
          <a href="acerca-de-gabo" class="px-4 py-2 rounded-md flex space-x-2" aria-current="{segment === 'acerca-de-gabo' ? 'page' : undefined}">
            <svg class="stroke-current" fill="#FFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.667 426.667" width="24" height="24">
              <path d="M192 192h42.667v128H192z"/>
              <path d="M213.333 0C95.467 0 0 95.467 0 213.333s95.467 213.333 213.333 213.333S426.667 331.2 426.667 213.333 331.2 0 213.333 0zm0 384c-94.08 0-170.667-76.587-170.667-170.667S119.253 42.667 213.333 42.667 384 119.253 384 213.333 307.413 384 213.333 384z"/>
              <path d="M192 106.667h42.667v42.667H192z"/>
            </svg>
            <div class="hidden xl:block">Acerca de</div>
          </a>
        </div> 
        
        <div class="xl:px-2">
          <a href="contacto" class="px-4 py-2 rounded-md flex space-x-2" aria-current="{segment === 'contacto' ? 'page' : undefined}">
            <svg class="stroke-current" fill="#FFF" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 31.125 31.126">
              <path d="M31.125 28.625a2.5 2.5 0 11-5 0C26.125 15.598 15.527 5 2.5 5a2.5 2.5 0 010-5c15.787 0 28.625 12.841 28.625 28.625zM2.501 11.698a2.5 2.5 0 100 5c6.576 0 11.929 5.353 11.929 11.929a2.499 2.499 0 105 0c0-9.335-7.596-16.929-16.929-16.929zm1.985 11.208a3.733 3.733 0 100 7.467 3.733 3.733 0 000-7.467z"/>
            </svg>
            <div class="hidden xl:block">Contacto</div>
          </a>
        </div>

        <div class="xl:px-2">
          <a href="blog" class="px-4 py-2 rounded-md flex space-x-2" aria-current="{segment === 'blog' ? 'page' : undefined}">
            <svg class="stroke-current" fill="#FFF"xmlns="http://www.w3.org/2000/svg" height="24" width="28" viewBox="0 0 511 512">
              <path d="M448.911-15.166c-6.44-6.445-16.89-6.445-23.332 0L298.413 112H10.05c-27.294 0-49.5 22.206-49.5 49.5v230.996c0 27.298 22.206 49.5 49.5 49.5h17.6v84.7a16.5 16.5 0 0028.295 11.541l94.144-96.241H342.25c27.294 0 49.5-22.202 49.5-49.5v-187.16L518.916 78.172c6.441-6.446 6.441-16.891 0-23.337zM297.236 253.178l-46.668-46.668L390.577 66.505l46.668 46.668zM232.989 235.6l35.157 35.157-60.26 25.102zM358.75 392.496c0 9.1-7.404 16.5-16.5 16.5h-199.1a16.507 16.507 0 00-11.795 4.963L60.65 486.236v-60.74c0-9.11-7.386-16.5-16.5-16.5h-34.1c-9.096 0-16.5-7.4-16.5-16.5V161.5c0-9.1 7.404-16.5 16.5-16.5h255.359l-49.844 49.844a16.862 16.862 0 00-3.644 5.513L166.25 310h-89.1c-9.114 0-16.5 7.386-16.5 16.5 0 9.11 7.386 16.487 16.5 16.487h100.104c2.123 0 4.4-.434 6.484-1.328l119.651-49.835c1.994-.778 4.005-2.131 5.517-3.644l49.844-49.843zm101.827-302.66L413.91 43.169l23.336-23.332 46.669 46.669zm0 0"/>
            </svg>
            <div class="hidden xl:block">Blog</div>
          </a>
        </div>

        <div class="xl:px-2">
          <a href="https://github.com/esgabo/es-gabo-en-la-web" class="px-4 py-2 rounded-md flex space-x-2">
            <svg class="stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <div class="hidden xl:block">Github</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

