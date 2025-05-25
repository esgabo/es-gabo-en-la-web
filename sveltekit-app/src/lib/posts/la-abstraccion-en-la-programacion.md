---
published_date: 2020-06-24T20:08:57.000+00:00
tags:
- programacion
- fundamentos
created_date: 2020-06-24T20:08:57.000+00:00
title: La Abstracción en la programación
summary: |
  La abstracción más que una palabra elegante de programación, es un concepto que aplicamos en nuestra vida diaria. Especialmente útil y necesaria en la programación aunque un poco complejo de entender al principio y aplicarlo adecuadamente.
  Si no sabes qué es y como se relaciona con la programación, puede que te interese esta publicación.
author: Gabriel Espinel | @es.gabo
heading_image: "/media/abstracto.webp"
published: true

---
Según la [RAE](https://www.rae.es/ "rae-enlace"), la abstracción, o más específicamente, el verbo [_abstraer_](https://dle.rae.es/abstraer "rae-abstraer") significa:

> Separar por medio de una operación intelectual un rasgo o una cualidad de algo para analizarlos aisladamente o considerarlos en su pura esencia o noción.

De esto podemos decir que _abstraer_ es, básicamente, ignorar o eliminar detalles de algo para enfocarnos en los puntos más relevantes de ese algo.

## La abstracción como base para la reutilización

Los humanos dependemos tanto de la abstracción que, virtualmente, nuestra vida cotidiana se basa en ella. Damos por hechas muchas cosas a nuestro alrededor, abstrayéndonos de su funcionamiento interno; simplemente conociendo qué hace, qué necesita para hacerlo pero **no** cómo lo hace.

Piensa un poco y analiza con cuantos objetos interactúas diariamente de los cuales no tienes idea de cómo funcionan y la verdad, no tienes que saberlo. La mayoría de nuestras investigaciones científicas se basan en conclusiones de trabajos de otras personas, donde se da por hecho que algo funciona como dice que funciona, y trabajan sobre esas conclusiones sin tener que empezar todo desde cero. Esta es una buena manera de avanzar reusando el trabajo existente, abstrayéndonos de los detalles internos lo que nos permite funcionar en un nivel más alto.

¿Te has preguntado como funciona un televisor? Pues si lo pensamos un poco, le damos energía eléctrica, alguna señal y esperamos que nos muestre imágenes. Ahí estamos abstrayendo muchos detalles. ¿Sabes cómo funciona la pantalla del televisor? ¿Sabes cómo se representan los colores en la pantalla del televisor?.

> No necesitas saber como funciona algo para usarlo

### El concepto de _Caja Negra_

Este término se usa como analogía para hacer referencia a componentes o sistemas de los cuales no se conocen los detalles interno de su funcionamiento.

Básicamente, llamamos _caja negra_ a aquellas cosas que le hemos aplicado la abstracción, es decir, no queremos saber sus detalles internos, solamente como interactuar con ese algo. Para eso, debemos saber qué necesita para funcionar y cuál es el resultado que genera (entrada y salida).

Así como en los ejemplos anteriores, vemos muchas cosas como “cajas negras”: un televisor, un auto, una máquina de helados, una calculadora, un restaurante, el cuerpo humano, y muchísimas cosas más.

Este concepto es esencial para los programadores porque, basados en él, podemos reutilizar programas y códigos de otras personas simplemente conociendo su entrada y los resultados que produce.

## La abstracción como técnica para analizar problemas

Imaginemos a un pintor de paredes que debe cotizar cuanto cobrar por pintar una casa. Este seguramente abstrae los detalles de una casa cuando está analizando lo que debe hacer. Al pintor no le interesa el estado del suelo, ni el estado del techo, o de las puertas. Al pintor solo le interesa el estado de las paredes. En su mente, el objeto que está analizando deja de ser una casa completa y se convierte en puras paredes y se enfoca en analizar eso solamente.

Lo mismo ocurre con el plomero. A él no le interesa nada más que las tuberías, el material del cual están hechas, su ubicación, etc. Entonces deja de pensar en las cosas irrelevantes para su problema inmediato y se enfoca únicamente en ese problema específico.

![](/media/abstracciones_casas.webp)

En estos casos, ellos saben bien en qué deben enfocarse. Ellos llevan años en su negocio y saben bien qué ignorar y qué no. Su experiencia juega un papel importante.

En la programación, muchas veces no es sencillo saber que es relevante y que no lo es.

### La programación es multi-disciplinaria

Como ya mencione en [otra publicación](https://esgabo.dev/blog/que-es-la-programacion-y-que-hace-un-programador "que-hace-un-programador"). La programación es, básicamente, resolver problemas. Los programadores aprenden a (o aspiran) resolver problemas de la manera más eficiente. Sin embargo, no pueden pretender saber todo acerca de todas las carreras que existen y todas las áreas de conocimiento.

Para llevar con éxito un proyecto complejo, que cumpla con la necesidad del cliente y su negocio, es necesario aprender un poco de ese negocio; de esa disciplina. Si trabajas en un sistema de contabilidad, pues el programador debe entender un poco de contabilidad. Si trabajas en un sistema de ventas, entonces el programar debe entender un poco de logística e inventario.

Nuestra suposición es que, en principio, no vamos a saber más que nuestro cliente de su negocio. Después de todo, es posible que ellos hayan estudiado una carrera para eso, o tenga muchos años de experiencia en el área. Incluso si tú, como programador, también has tenido experiencia en esa área, puede que ese cliente maneje procesos particular de los cuales tú no conoces nada. Así que vamos a trabajar sobre esa suposición: _Nuestro cliente sabe más de su negocio que nosotros._

Para poder resolver un problema, primero debemos entenderlo. Si no lo entendemos, no vamos a hallar la solución. Si al área de conocimiento resulta totalmente ajena a nosotros (i.e. podemos no saber absolutamente nada del tema), aplicar la abstracción nos ayudara a entender mejor el problema, al enfocarnos únicamente en los detalles que son relevantes para ese problema o partes de ese problema.

Un problema complejo puede ser dividido en varios problemas más simples. Estos, a su vez, pueden ser divididos en otros más pequeños, hasta que tengamos un conjunto de problemas relativamente triviales o cuya solución sea fácil de hallar.

¿Quieres una tienda online? Bien, ¿Cómo está compuesta la tienda? ¿Qué productos tienes? ¿Qué categorías de productos? ¿Qué descuentos ofreces?. Todas estas preguntas rompen un problema más grande como el de una tienda online, en problemas más pequeños y manejables. Estos problemas más pequeños los podría romper aún más, abstrayéndome de los otros problemas, momentáneamente, para enfocarme en una sola cosa a la vez.

## La abstracción como herramienta para el modelado

El modelado en la programación es esencial para ayudar a resolver problemas, representando partes o componentes de ese problema. Lo que se trata de modelar o representar en el programa es el funcionamiento de estas partes. Siguiendo el ejemplo de la tienda online, un carrito de compras en un sitio web es una representación de un carrito de compras real, es decir, cumple una funciona similar al llevar los artículos que deseamos comprar. Sin embargo, no es un carro de compras real; no es físico; y realmente no estás llevando un carro de compras en tus manos. Es simplemente una representación o modelo.

En este orden de ideas, podríamos decir que un modelo es la representación de un objeto real o un concepto abstracto (como una cuenta contable) del mundo real, perteneciente al dominio o área de conocimiento del cual queremos automatizar los procesos y que le hemos aplicado el proceso de abstracción, es decir, al modelar algo realmente estamos eliminando detalles que no son relevantes.

Una auto de juguete es básicamente un modelo. Se ignoraron detalles del auto real para hacer ese juguete. Detalles como, por ejemplo, un motor funcional, o tanque de combustible, entre muchos otros. Entonces no podemos decir que ese juguete es auto real, y simplemente es una representación “abstracta” del auto.

¿Abstracta? “Gabo, no es abstracta porque el juguete tiene _forma_ de el auto real”. Pues hay diferentes niveles de abstracción. Podemos decir que en el momento en que ignoramos detalles de un objeto, ya estamos creando una representación abstracta (sin algunos detalles) de ese objeto. El nivel de abstracción dependerá que tantos detalles removamos en nuestro modelo.

Consideremos un traje y tratemos de aplicar distintos niveles de abstracción. Empezando, tenemos dos extremos: un extremo con el nivel mínimo de abstracción (ninguna abstracción) donde encontramos al objeto real con absolutamente todos los detalles. Mientras, en el otro extremo tenemos el nivel máximo de abstracción donde removemos todos los detalles y nos queda absolutamente nada, solo un vacío. (Si yo ofrezco un [traje transparente y lo vendo](https://es.wikipedia.org/wiki/El_traje_nuevo_del_emperador "el-rey-desnudo"), pues efectivamente, es un traje para quien lo quiera ver de esa forma).

Dentro de estos dos extremos hay muchísimos niveles. Yo podría ignorar el color, ignorar el material, ignorar la forma, entre muchas otros detalles. Mi nivel de abstracción puede ser totalmente diferente al de alguien más. De hecho, es extremadamente común que dos personas hallen soluciones diferentes al mismo problemas porque, entre otras cosas, aplicaron un nivel diferente de abstracción y es aquí donde la buena comunicación juega un papel importante para que todos se puedan entender.

¿Qué sucede si omito demasiados detalles al resolver un problema? Si esto sucede, tu solución puede tener huecos y no funcionar para situaciones específicas.

¿Qué sucede si omito pocos detalles? Entonces tu solución puede resultar mucho más compleja de lo que debería ser, aumentando costos en tiempo, dinero, mantenimiento, etc.

Encontrar el nivel de abstracción adecuado no es trivial. En mi opinión, es algo que viene teniendo una buena preparación y conocimientos sólidos como bases, y la experiencia de trabajar en diferentes proyectos con diferentes personas, evaluando sus puntos de vista y objetivamente evaluando cada uno de los enfoques.

## Conclusiones

La abstracción más que una palabra elegante de programación, es un concepto que aplicamos en nuestra vida diaria.

Especialmente útil y necesaria en la programación aunque un poco complejo de entender al principio y aplicarlo adecuadamente.

_Esta publicación está basada en el video de mi canal en YouTube_

@[youtube](puTrRZd6_aI)