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

		const toggleNavStyle = function () {
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

		var navMenuDiv = document.getElementById("nav-content");
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
		}
	});

</script>

<style>
[aria-current] {
	position: relative;
	display: inline-block;
}

[aria-current]::after {
	content: '';
	height: 2px;
	background-color: rgb(255,62,0);
	display: block;
	bottom: -1px;
}
</style>

<nav id="header" class="fixed w-full z-50 top-0 text-white">

	<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

		<div class="pl-4 flex items-center">
			<a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href=".">
				<img class="h-8 fill-current inline" style="height:35px;margin-bottom: 5px;" src="logo_naranja.svg" alt="logo"> GABO
			</a>
		</div>

		<div class="block lg:hidden pr-4">
			<button id="nav-toggle" class="flex items-center p-1 text-orange-800 hover:text-gray-900">
				<svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				<li class="mr-3">
					<a aria-current="{segment === undefined ? 'page' : undefined}" class="inline-block toggleColour text-white no-underline hover:text-orange-500 hover:text-underline py-2 px-4" href=".">Inicio</a>
				</li>
				<li class="mr-3">
					<a aria-current="{segment === 'acerca-de-gabo' ? 'page' : undefined}" class="inline-block toggleColour text-white no-underline hover:text-orange-500 hover:text-underline py-2 px-4" href="acerca-de-gabo">Acerca de</a>
				</li>
				<li class="mr-3">
					<a aria-current="{segment === 'contacto' ? 'page' : undefined}" class="inline-block toggleColour text-white no-underline hover:text-orange-500 hover:text-underline py-2 px-4" href="contacto">Contacto</a>
				</li>
			</ul>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
			<a id="navAction" rel=prefetch class="mx-auto lg:mx-0 hover:underline navaction-gabo-base font-bold rounded-full mt-4 lg:mt-0 py-4 px-8" href="blog">Blog</a>
		</div>
	</div>
</nav>
