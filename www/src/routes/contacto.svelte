<script>
	import HeaderSlot from '../components/HeaderSlot.svelte';
	import Card from '../components/utils/panels/Card.svelte';
</script>

<svelte:head>
	<title>Contacto</title>
</svelte:head>

<HeaderSlot slotHtml={`
<div class="container mx-auto flex flex-col items-center justify-center text-white pt-12 pb-32">
	<div class="font-quicksand font-semibold text-center text-5xl xl:text-6xl">Contacto</div>
	<div class="font-quicksand text-center text-2xl xl:text-3xl">¿Dónde puedes encontrarme?</div>
</div>`}/>

<section class="container mx-auto -m-32 mb-12">
	<div class="grid gap-6 grid-cols-3 sm:grid-cols-1">
	
		<!-- YOUTUBE -->
		<div class="mb-2">
			<div class="relative z-10 flex justify-center -mb-8">
				<div class="bg-white border rounded-md p-1 shadow-md">
					<a href="https://www.youtube.com/channel/UCg5oehh0kF-XBfuuqgGOqsA">
						<svg class="anim-slider" height="65" width="65" xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 511.928 511"><path d="M255.965 323.166a1088.035 1088.035 0 01-130.363-7.862c-19.453-2.57-34.845-17.723-37.722-37.13a562.243 562.243 0 010-172.113c2.877-19.408 18.27-34.56 37.722-37.13a1090.134 1090.134 0 01260.725 0c19.45 2.57 34.843 17.722 37.72 37.13a562.075 562.075 0 010 172.113c-2.877 19.407-18.27 34.56-37.72 37.13a1088.102 1088.102 0 01-130.362 7.862zm0 0" fill="#e76e54" data-original="#E76E54"/><path d="M212.281 266.434V117.8l118.895 74.316zm0 0" fill="#fff" data-original="#FFF" data-old_color="#fff"/></svg>
					</a>
				</div>
			</div>
			<div class="py-12 px-6 xl:px-12 bg-white text-black border shadow-md rounded-md relative">
				<div class="flex flex-col items-center justify-center">
					<h5 class="uppercase text-lg font-semibold tracking-widest font-quicksand">Estoy en YouTube</h5>
					<div class="text-gray-500 text-center uppercase text-xs tracking-widest">Suscribete a mi <a class="underline" href="https://www.youtube.com/channel/UCg5oehh0kF-XBfuuqgGOqsA">canal</a>
					</div>
					<div class="mt-6 text-center leading-relaxed text-gray-700">Suscribete a mi canal de YouTube para que no te pierdas ninguno de los videos donde hablo de temas de programación y desarrollo de software</div>
				</div>
			</div>
		</div>
			
		<!-- INSTAGRAM -->
		<div class="mb-2">
			<div class="relative z-10 flex justify-center -mb-8">
				<div class="bg-white border rounded-md p-1 shadow-md">
					<a href="https://www.instagram.com/es.gabo/">
						<svg class="anim-slider" height="65" width="65" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><linearGradient id="a" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047"><stop offset="0" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></linearGradient><path d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z" fill="url(#a)"/><path d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 100 2.126 1.063 1.063 0 000-2.126zm-4.73 1.243a4.55 4.55 0 10.001 9.101 4.55 4.55 0 00-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" fill="#fff"/></svg>
					</a>
				</div>
			</div>
			<div class="py-12 px-6 xl:px-12 bg-white text-black border shadow-md rounded-md relative">
				<div class="flex flex-col items-center justify-center">
					<h5 class="uppercase text-lg font-semibold tracking-widest font-quicksand">También tengo Instagram</h5>
					<div class="text-gray-500 text-center uppercase text-xs tracking-widest">Sigueme <a class="underline" href="https://www.instagram.com/es.gabo/">@es.gabo</a>
					</div>
					<div class="mt-6 text-center leading-relaxed text-gray-700">Puedes seguirme en Instagram donde constantemente publico contenido y tips de programación</div>
				</div>
			</div>
		</div>

		<!-- LINKEDIN -->
		<div class="mb-2">
			<div class="relative z-10 flex justify-center -mb-8">
				<div class="bg-white border rounded-md p-1 shadow-md">
					<a href="https://www.linkedin.com/in/ilgespinel/">
						<svg class="anim-slider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.02 512.02" width="70" height="70"><g fill="#007AAA"><path d="M136.134 100.708c20.707 0 38.144 17.438 38.144 38.145 0 21.796-18.527 38.689-38.144 38.144-20.162.545-38.144-16.348-38.144-38.144-.545-21.252 16.893-38.145 38.144-38.145M157.386 411.311h-43.594c-5.993 0-10.898-4.904-10.898-10.898v-190.72c0-5.995 4.36-10.9 10.353-10.9h44.138c5.994 0 10.899 4.905 10.899 10.9v191.265c0 5.45-4.904 10.353-10.898 10.353M413.497 265.274c0-40.324-29.97-71.93-70.294-71.93h-11.444c-21.796 0-43.048 10.354-54.491 27.246l-5.45 5.45v-21.797c0-2.18-3.27-5.45-5.45-5.45h-54.491c-2.18 0-5.45 2.18-5.45 4.905v203.255c0 2.18 3.27 4.36 5.45 4.36h59.94c2.18 0 5.45-2.18 5.45-4.36V289.25c0-20.162 15.257-37.055 35.42-37.6 10.353 0 19.616 3.815 26.7 10.899 6.54 6.539 9.264 15.802 9.264 26.156v117.157c0 2.18 3.27 5.45 5.45 5.45h54.491c2.18 0 5.45-3.27 5.45-5.45V265.274h-.545z" data-original="#007AAA"/></g></svg>
					</a>
				</div>
			</div>
			<div class="py-12 px-6 xl:px-12 bg-white text-black border shadow-md rounded-md relative">
				<div class="flex flex-col items-center justify-center">
					<h5 class="uppercase text-lg font-semibold tracking-widest font-quicksand">Claro que tengo LinkedIn</h5>
					<div class="text-gray-500 text-center uppercase text-xs tracking-widest">Visita mi <a class="underline" href="https://www.linkedin.com/in/ilgespinel/">perfil</a>
					</div>
					<div class="mt-6 text-center leading-relaxed text-gray-700">Puedes encontrar mi perfil de LinkedIn y enviarme una solicitud para conectar</div>
				</div>
			</div>
		</div>

		<!-- GITHUB -->
		<div class="mb-2">
			<div class="relative z-10 flex justify-center -mb-8">
				<div class="bg-white border rounded-md p-1 shadow-md">
					<a href="https://github.com/esgabo/">
						<svg class="anim-slider" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 35.318 35.318"><path d="M22.272 30.642c-.131.047-.263.104-.398.128-.517.092-.848-.175-.85-.703-.008-.981-.008-1.96.008-2.942.017-1.128-.009-2.242-.868-3.173.51-.091.965-.155 1.41-.258 2.944-.676 4.473-2.533 4.668-5.615.1-1.569-.18-3.008-1.223-4.244-.075-.087-.079-.284-.043-.41.277-1.022.197-2.02-.127-3.019-.08-.25-.212-.326-.459-.31-.864.048-1.656.351-2.354.818-.674.452-1.3.55-2.1.367-1.76-.397-3.533-.281-5.29.126-.2.047-.467-.016-.65-.123-.824-.483-1.649-.953-2.6-1.14-.736-.143-.8-.107-.995.604-.246.897-.27 1.794-.02 2.696.037.131 0 .342-.089.438-1.949 2.175-1.243 6.285.07 7.86 1.022 1.222 2.38 1.773 3.886 2.058.263.05.524.087.787.132-.226.587-.428 1.142-.658 1.687-.045.105-.187.193-.304.237-1.477.574-2.748.152-3.593-1.189-.452-.715-1.032-1.25-1.897-1.404-.027-.005-.055-.02-.08-.016-.233.061-.463.125-.695.188.13.181.223.425.397.534.733.463 1.21 1.124 1.524 1.904.495 1.223 1.455 1.768 2.703 1.875.61.05 1.225.007 1.892.007 0 .76.027 1.627-.012 2.49-.02.465-.487.65-1.046.46-1.485-.508-2.86-1.236-4.05-2.259-4.29-3.696-5.945-8.37-4.518-13.84C6.119 9.155 9.825 5.81 15.366 4.76c7.667-1.45 14.93 4.134 15.69 11.916.601 6.136-3.01 11.877-8.784 13.966zm-7.228-6.739l-.012.03.042.006c.01 0 .02.02-.03-.036zm-3.468 2.425c.12.074.234.168.363.208.047.016.135-.092.29-.206-.215-.082-.342-.153-.475-.172-.052-.006-.119.11-.178.17zm1.092.188c.017.08.177.18.27.178.091-.001.18-.122.27-.19-.082-.076-.164-.149-.417-.377-.055.159-.146.287-.123.389zm1.34-.323c-.113.027-.208.132-.31.203.06.076.12.147.216.267l.316-.289c-.076-.066-.165-.194-.222-.18zm-3.322-.452c.062.119.16.22.29.388.088-.144.183-.253.166-.276a1.472 1.472 0 00-.307-.28c-.007-.005-.162.142-.15.168z" data-original="#000000" class="active-path"/></svg>
					</a>
				</div>
			</div>
			<div class="py-12 px-6 xl:px-12 bg-white text-black border shadow-md rounded-md relative">
				<div class="flex flex-col items-center justify-center">
					<h5 class="uppercase text-lg font-semibold tracking-widest font-quicksand">Aquí está mi GitHub</h5>
					<div class="text-gray-500 text-center uppercase text-xs tracking-widest">Mira mis <a class="underline" href="https://github.com/esgabo/">repositorios</a>
					</div>
					<div class="mt-6 text-center leading-relaxed text-gray-700">Puedes encontrar mi perfil de GitHub y mis repositorios</div>
				</div>
			</div>
		</div>
	</div>
</section>
<div></div>