<script>
	import HeaderSlot from '../components/HeaderSlot.svelte';
	import Card from '../components/utils/panels/Card.svelte';
</script>

<svelte:head>
	<title>Acerca de Gabo</title>
</svelte:head>

<HeaderSlot slotHtml={`
<div class="container mx-auto flex flex-col items-center justify-center text-white pt-12 pb-32">
	<div class="font-quicksand font-semibold text-center text-5xl xl:text-6xl">Acerca de Gabo</div>
	<div class="font-quicksand text-center text-2xl xl:text-3xl">Un poco sobre mí</div>
</div>`}/>

<section class="flex flex-col items-center mb-4 relative -mt-32">
	<div class="container flex justify-center mx-auto w-5/6 sm:w-full xl:w-4/6">
		<Card clazz="flex flex-wrap mt-4 rounded-lg rounded-md" commonClasses="sm:px-1 px-6 py-6">
			<p>Mi nombre es Gabriel Espinel y soy un desarrollador de software de profesión y vocación.<br/>
				Ya van más de 10 años desde que me empezaron a pagan por programar y un par de años adicionales haciendo algunos proyectos por diversión.</p>
			<p>Durante este tiempo he trabajando en diversos proyectos con diferentes tecnologías (escritorio, web, móviles, dispositivos de pago, etc).<br/>
				Mi fuerte es el Back-End, principalmente en el entorno empresarial (con Java), pero me considero Full-Stack y no tengo ningún inconveniente en aprender cosas nuevas.</p>
			<p>Soy Curioso por naturaleza y apasionado por las soluciones elegantes y bien hechas. Me apasiona la tecnología en general (no solo la programación).<br/>
				Es por eso que no sólo tengo conocimientos de desarrollo de software, sino también de otras áreas como las redes de comunicaciones, sistemas operativos, disciplinas DevOps, metodologías ágiles, etc.</p>
			<p>Si quieres contactarte conmigo, entre a <a href="contacto">este</a> enlace.</p>
		</Card>
	</div>
</section>
