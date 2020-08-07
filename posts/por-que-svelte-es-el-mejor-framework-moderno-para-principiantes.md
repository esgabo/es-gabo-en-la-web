---
published_date: 2020-08-07T16:08:14Z
tags:
- svelte
- frontend
- principiante
created_date: 2020-08-07T16:08:14Z
title: "¿Por qué Svelte es el mejor Framework moderno para principiantes?"
summary: |-
  Hace 10 años era posible crear apps solo con eso, añadiendo librerías como jQuery. Sin embargo, hoy en día no es suficiente.
  Cuando eres principiante y acabas de entender los conceptos de HTML, JS, y CSS, se hace un poco difícil aprender las nuevas tecnologías que se usan actualmente en la industria. Es por eso que Svelte se convierte en un framework maravilloso, que entre otros beneficios, puede ayudar a aquellos que se están iniciando a aprender las prácticas modernas del desarrollo FrontEnd.
author: Gabriel Espinel | @es.gabo
heading_image: ''
published: false

---
Antes que nada voy a aclarar algunas cosas para evitar recibir amenazas de muerte por parte de los fanáticos de otros _frameworks_ como React, Angular o Vue.

Esta publicación **no** es para decir que un _framework_ es mejor que otro. Cada uno tienes sus fortalezas y debilidades. Aquí solamente estoy dando mi opinión después de haber jugado con Svelte, y ya teniendo un poco de experiencia con los otros _frameworks_. ¡Así que cálmense!. 

Si sienten alguna molestia o no soportan las opiniones contrarias a sus creencias, por favor, no sigan leyendo esta publicación. Están advertidos.

También tengo que aclarar que solo estoy tomando en cuenta los _frameworks_ más populares React, Angular y Vue. Entonces si existe algún otro _framework_ que no sea tan popular y consideran que es mejor que Svelte, háganmelo saber.

Ya que pasamos la advertencia. Lo primero que tengo que definir es a que me refiero con "principiantes". Me refiero a quellas personas que no tienen experiencia profesional y que acaban de terminar algún curso, tutorial, libro, etc. acerca de lo básico del desarrollo web (HTML, JS, CSS) y tienen la preguntan ¿Ahora qué?.

En muchos sitios aún se dice que aprendiendo lo básico ya vas a ser un desarrollador web y eso es técnicamente es cierto: si dominas esos lenguajes vas a poder hacer aplicaciones web (generalmente sencillas). Pero en el mundo profesional, cuando tengas un empleo en alguna empresa, con casi seguridad esto no va a ser suficiente, porque la industria del desarrollo FrontEnd usa mucho más que lo básico. Usa herramientas como _Bundlers_, Preprocesadores, _frameworks_ modernos para JavaScript, administrador de paquetes, y una cantidad de tecnologías que van mucho más allá del simple HTML/JS/CSS.

## ¿Qué es Svelte?

Para quienes no sepan que es Svelte, les explico rápidamente:

Svelte es un _framework_ para JavaScript, similar a React, Angular o Vue (que son los más utilizados en la actualidad). Sin embargo, a diferencia de estos _frameworks_ populares que necesitan incluir su propia lógica con tu aplicación, en Svelte no se incluye nada (o casi nada) adicional, dejando el código final producido de tu aplicación mucho más ligero. 

Svelte es en el fondo un compilador que traduce tus componentes desarrollados a JavaScript puro, sin necesitar agregar lógica adicional para que el navegador pues entender tu app.

Entre las ventajas más destacadas de Svelte se encuentran su desempeño (más rápido que otros _frameworks_), su simplicidad (menos código repetitivo), su reactividad (administración de estado de los componentes de manera simple), y su poca huella en el tamaño de la app generada (una app en Svelte pesa significativamente menos que una app en otros _frameworks_).

He de aclarar que aunque es cierto todo esto, también es relativo. Por ejemplo, no podemos simplemente decir que Svelte es mejor que React solo por ser algunas milésimas de segundo más rápido. Es cierto que es más rápido, pero llegara un punto donde la diferencia no es tan significativa y no impacta la experiencia del usuario. Así que no se dejen llevar solo por esa métrica, ya que dependerá realmente de la complejidad de la aplicación.

Lo mismo en el caso del tamaño de la app. Menos no siempre significa mejor. Sin duda es algo bueno tener una aplicación que pese menos, ya que se transmite más rápidamente por la red, y si tiene menos código adicional que procesar, pues el motor de JavaScript tendrá menos trabajo, lo que implica naturalmente una carga más rápida. Pero, nuevamente, es relativo, ya que los otros _frameworks_ están optimizados.

En cuanto a la simplicidad pero necesitar menos código, sí me parece muy importante para los principiantes o incluso expertos que quieran adoptar Svelte. Creo que todo podemos estar de acuerdo que entre menos código tengamos que escribir, es más fácil de aprender una tecnología. 

Una acotación que hay que hacer es que he leído publicaciones o visto videos donde expresan que Svelte es mejor simplemente por necesitar menos líneas de código para generar componentes. Esto es simplemente incorrecto. Medir si algo es mejor por el número de líneas de código no está bien porque empieza a generar una práctica de tratar de meter todo los más compacto posible para decir que es "mejor". 

No por meter todo en una sola linea va a ser mejor. Esto es muy importante que lo tengamos claro. ¿En dónde está la diferencia? Si tenemos el mismo componente escrito en dos lenguajes diferentes (o _frameworks_ diferentes) y ambos han aplicado las buenas practicas (e.g. es un código limpio y es fácil de entender), entonces la suposición es que menos líneas de código es menos código que mantener y por tanto menos probabilidad de errores. Aunque esto no es necesariamente cierto.

Puede ser que tengamos menos líneas de código porque estamos usando alguna librería o algún componente que se encargue de esa necesidad particular. En este caso, no estamos removiendo la posibilidad de errores sino que lo estamos moviendo de lugar, desde nuestro código hacia algún componente externo. 

Particularmente, no estoy totalmente de acuerdo con estas suposiciones, las menciono porque es de las cosas que van a encontrar en Internet. Menos líneas de código no es necesariamente mejor. Pero menos código repetitivo...eso sí me parece un beneficio, y hay que tener clara la diferencia.

Les recomiendo que vean el [video Rethinking Reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao "rethinking-reactivity") de Rich Harris, creador de Svelte. Aquí explica más a fondo las ventajas de Svelte y sus valores fundamentales con ejemplos y comparaciones.

## ¿Por qué es mejor para principiantes?

La razón principal es que desarrollar componentes con Svelte se siente natural e intuitivo. Se siente casi como si estuviéramos trabajando solamente con HTML, JS, y CSS.

Por supuesto que hay que aprender cosas adicionales, pero estos puntos adicionales se parecen mucho a lo que los principiantes ya conocen. Para alguien que está empezando, entre menos cosas adicionales deba aprender para usar algo nuevo, le va a resultar más fácil adoptarlo. 

Consideremos este componente en React donde se tienen dos campos de textos para sumar dos números y mostrarlos por pantalla.

    import React, { useState } from 'react';
    
    export default () => {
      const [a, setA] = useState(1);
      const [b, setB] = useState(2);
    
      function handleChangeA(event) {
        setA(+event.target.value);
      }
    
      function handleChangeB(event) {
        setB(+event.target.value);
      }
    
      return (
        <div>
          <input type="number" value={a} onChange={handleChangeA}/>
          <input type="number" value={b} onChange={handleChangeB}/>
    
          <p>{a} + {b} = {a + b}</p>
        </div>
      );
    };

Mi primera impresión como un principiante, serían las siguientes preguntas: ¿Para qué debemos usar ese setState? ¿Por qué tengo que declarar un arreglo con dos elementos? ¿No sería suficiente tener una variable y ya? ¿Por qué tengo que retornar el HTML desde este JavaScript?. Por supuesto que hay una explicación para todo esto pero esto luce diferente a lo basico que han aprendido. Claro que pueden aprender JSX, Hooks, CSS-In-JS, Redux, etc. Pero es algo que va a llegar su tiempo. 

Veamos un componente equivalente usando Angular:

    import { Component } from '@angular/core';
     
    @Component({
      selector: 'my-app',
      template: `
        <input type="number" [(ngModel)]="a">
        <input type="number" [(ngModel)]="b">
        <p>{{a}} + {{b}} = {{a + b}}</p>
      `
    })
    export class AppComponent {
      a : number;
      b : number;  
    }

Se ve un componente más corto, de menor tamaño. ¿Qué es ese @Component?, ¿Por qué el HTML esta dentro de esa propiedad de ese objeto JavaScript? ¿Qué es ese ngModel? ¿Qué es TypeScript?. Aún se ve diferente a lo básico, y por tanto, deberán tomarse su tiempo para acostumbrarse a aprender estas diferencias.

Para ser justos, en Angular podríamos definir el HTML en su propio archivo, pero estaríamos siguiendo un enfoque diferente (y no es que esté mal) al tener separados los diferentes aspectos del mismo componente en archivos separados.

Ahora veamos la contraparte en Vue.

    <template>
      <div>
        <input type="number" v-model.number="a">
        <input type="number" v-model.number="b">
        <p>{{a}} + {{b}} = {{a + b}}</p>
      </div>
    </template>
    
    <script>
      export default {
        data: function() {
          return {
            a: 1,
            b: 2
          };
        }
      };
    </script>

Lo vemos, un poco más limpio. Se parece más a lo que estamos acostumbrados. Etiquetas en HTML, incluyendo el uso de la etiqueta Script para el código JavaScript. ¿Por qué tenemos que poner ese "export default"? ¿Por qué las variables deben estar dentro de esa propiedad "data" que es una función que retorna un objeto con las variables que quiero tener?. Creo que se puede mejorar.

Finalmente, veamos como sería este componente en Svelte.

    <script>
    	let a = 1;
    	let b = 2;
    </script>
    
    <input type="number" bind:value={a}>
    <input type="number" bind:value={b}>
    
    <p>{a} + {b} = {a + b}</p>