<script>
  	import { onMount } from 'svelte';
	export let segment;

	onMount(() => {
		var header = document.getElementById("header");
		var navcontent = document.getElementById("nav-content");
		var navaction = document.getElementById("navAction");
		var toToggle = document.querySelectorAll(".toggleColour");
		var toggleTextBaseColor = 'text-white';
		var toggleTextMovedColor = 'text-gabo-blue';

		/*const toggleNavStyle = function () {
			let scrollpos = window.scrollY;
			if(scrollpos > 25) {
				header.classList.add("bg-white");
				navaction.classList.remove("navaction-gabo-base");
				navaction.classList.add("navaction-gabo-scrolled");

				//Use to switch toggleColour colours
				for (var i = 0; i < toToggle.length; i++) {
					toToggle[i].classList.add(toggleTextMovedColor);
					toToggle[i].classList.remove(toggleTextBaseColor);
				}
				header.classList.add("shadow");
				navcontent.classList.remove("bg-gray-100");
				navcontent.classList.add("bg-white");
			}
			else {
				header.classList.remove("bg-white");

				navaction.classList.add("navaction-gabo-base");
				navaction.classList.remove("navaction-gabo-scrolled");

				//Use to switch toggleColour colours
				for (var i = 0; i < toToggle.length; i++) {
					toToggle[i].classList.add(toggleTextBaseColor);
					toToggle[i].classList.remove(toggleTextMovedColor);
				}

				header.classList.remove("shadow");
				navcontent.classList.remove("bg-white");
				navcontent.classList.add("bg-gray-100");
			}
		}

		document.addEventListener('scroll', toggleNavStyle);

		// trigger togge logic once loaded
	toggleNavStyle();


		/*Toggle dropdown list*/
		/*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

		/*var navMenuDiv = document.getElementById("nav-content");
		var navMenu = document.getElementById("nav-toggle");

		document.onclick = check;
		function check(e){
			var target = (e && e.target) || (event && event.srcElement);

			//Nav Menu
			if (!checkParent(target, navMenuDiv)) {
				// click NOT on the menu
				if (checkParent(target, navMenu)) {
					// click on the link
					if (navMenuDiv.classList.contains("hidden")) {
					navMenuDiv.classList.remove("hidden");
					} else {navMenuDiv.classList.add("hidden");}
				} else {
					// click both outside link and outside menu, hide menu
					navMenuDiv.classList.add("hidden");
				}
			}

		}

		function checkParent(t, elm) {
			while(t.parentNode) {
			if( t == elm ) {return true;}
			t = t.parentNode;
			}
			return false;
		}*/
	});

</script>

<style>
[aria-current] {
	position: relative;
	display: inline-block;
}

[aria-current]::after {
	content:'';
  margin-left:-15px;
  margin-right:-15px;
  height: 45px;
  background-color: #EDF2F7;
  opacity: 0.2;
	display: block;
  margin-top: -37px;
  margin-bottom: -9px;
  border-radius: 8px;
}
</style>

<nav id="header" class="absolute w-full z-50 top-0 text-clg">

	<div class="w-full container mx-auto flex items-center mt-0 py-0 lg:mt-2 lg:py-2">
		<div class="pl-4">
			<a class="flex toggleColour no-underline hover:no-underline font-bold text-lg "  href=".">
				<img class="h-8 fill-current inline" style="height:25px;margin-bottom: 5px;padding-right:5px;" src="logo_naranja.svg" alt="logo">
        <span class="inline-block">GABO</span>
			</a>
		</div>
		<div class="w-full flex-grow flex items-center mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20" id="nav-content">
			<ul class="list-reset flex justify-end flex-1 items-center">
				<li class="mr-0 xl:mr-3">
					<a aria-current="{segment === undefined ? 'page' : undefined}" class="text-lg inline-block text-clg no-underline py-2 px-3 xl:px-4" href=".">
          <svg class="inline-block pb-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" width="27px" height="27px">
            <g>
              <path d="M336.709,74.843c-10.322-3.944-21.88,1.219-25.825,11.537c-3.945,10.316,1.22,21.879,11.536,25.824    C393.115,139.239,442,207.384,442,286c0,102.561-83.439,186-186,186S70,388.561,70,286c0-78.659,48.908-146.766,119.573-173.793    c10.317-3.946,15.481-15.509,11.536-25.825c-3.947-10.317-15.512-15.48-25.825-11.536C89.185,107.777,30,190.692,30,286    c0,124.922,101.09,226,226,226c124.922,0,226-101.09,226-226C482,190.65,422.778,107.759,336.709,74.843z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#EDF2F7"/>
            </g>
            <g>
              <path d="M256,0c-11.046,0-20,8.954-20,20v195.851c0,11.046,8.954,20,20,20s20-8.955,20-20V20C276,8.954,267.046,0,256,0z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#EDF2F7"/>
            </g>
            </svg>
            <span class="hidden xl:inline-block">Inicio</span>
          </a>
				</li>
				<li class="mr-0 xl:mr-3">
					<a aria-current="{segment === 'acerca-de-gabo' ? 'page' : undefined}" class="text-lg inline-block toggleColour text-clg no-underline py-2 px-3 xl:px-4" href="acerca-de-gabo">
          <svg class="inline-block pb-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 426.667 426.667" width="27px" height="27px">
          	<g>
          		<rect x="192" y="192" width="42.667" height="128" data-original="#000000" class="active-path" data-old_color="#000000" fill="#EDF2F7"/>
          		<path d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333     S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667     S384,119.253,384,213.333S307.413,384,213.333,384z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
          		<rect x="192" y="106.667" width="42.667" height="42.667" data-original="#000000" class="active-path" data-old_color="#000000" fill="#EDF2F7"/>
          	</g>
          </svg>
          <span class="hidden xl:inline-block">Acerca de</span>
          </a>
				</li>
				<li class="mr-0 xl:mr-3">
					<a aria-current="{segment === 'contacto' ? 'page' : undefined}" class="text-lg inline-block toggleColour text-clg no-underline py-2 px-3 xl:px-4" href="contacto">
          <svg class="inline-block pb-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="27px" height="27px" viewBox="0 0 31.125 31.126">
          	<path d="M31.125,28.625c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5C26.125,15.598,15.527,5,2.5,5C1.12,5,0,3.881,0,2.5   S1.12,0,2.5,0C18.287,0,31.125,12.841,31.125,28.625z M2.501,11.698c-1.381,0-2.5,1.119-2.5,2.5c0,1.381,1.119,2.5,2.5,2.5   c6.576,0,11.929,5.353,11.929,11.929c0,1.381,1.118,2.5,2.5,2.5c1.381,0,2.5-1.119,2.5-2.5   C19.43,19.292,11.834,11.698,2.501,11.698z M4.486,22.906c-2.063,0-3.733,1.673-3.733,3.734c0,2.062,1.672,3.734,3.733,3.734   s3.734-1.672,3.734-3.734C8.221,24.579,6.547,22.906,4.486,22.906z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#EDF2F7"/>
          </svg>
          <span class="hidden xl:inline-block">Contacto</span>
          </a>
				</li>
        <li class="mr-0 xl:mr-3">
          <a aria-current="{segment === 'blog' ? 'page' : undefined}" rel=prefetch class="text-lg inline-block toggleColour text-clg no-underline py-3 px-3 xl:px-4" href="blog">
          <svg class="inline-block pb-1" xmlns="http://www.w3.org/2000/svg" height="35px" width="35px" viewBox="0 0 511 511.9996">
            <g transform="matrix(1.1 0 0 1.1 -40 -20)">
              <path d="m444.464844 4.394531c-5.855469-5.859375-15.355469-5.859375-21.210938 0l-115.605468 115.605469h-262.148438c-24.8125 0-45 20.1875-45 45v209.996094c0 24.816406 20.1875 45 45 45h16v77c0 6.097656 3.691406 11.589844 9.335938 13.890625 5.726562 2.335937 12.183593.894531 16.386718-3.398438l85.585938-87.492187h174.691406c24.8125 0 45-20.183594 45-45v-170.144532l115.605469-115.605468c5.855469-5.859375 5.855469-15.355469 0-21.214844zm-137.886719 243.949219-42.425781-42.425781 127.28125-127.277344 42.425781 42.425781zm-58.40625-15.980469 31.960937 31.960938-54.78125 22.820312zm114.328125 142.632813c0 8.273437-6.730469 15-15 15h-181c-4.035156 0-7.902344 1.628906-10.722656 4.511718l-64.277344 65.707032v-55.21875c0-8.28125-6.714844-15-15-15h-31c-8.269531 0-15-6.726563-15-15v-209.996094c0-8.273438 6.730469-15 15-15h232.144531l-45.3125 45.3125c-1.25 1.25-2.488281 2.972656-3.3125 5.011719l-41.519531 99.675781h-81c-8.285156 0-15 6.714844-15 15 0 8.28125 6.714844 14.988281 15 14.988281h90.992188.011718c1.929688 0 4-.394531 5.894532-1.207031l108.773437-45.304688c1.8125-.707031 3.640625-1.9375 5.015625-3.3125l45.3125-45.3125zm92.570312-275.144532-42.425781-42.425781 21.214844-21.210937 42.425781 42.425781zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
            </g>
          </svg>
          <span class="hidden xl:inline-block">Blog</span>
        </a>
        </li>
      </ul>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->

         <!--<div class="block lg:hidden pr-4">
     			<button id="nav-toggle" class="flex items-center p-1 text-orange-800 hover:text-gray-900">
     				<svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
     			</button>
     		</div>-->

		</div>
	</div>
</nav>
