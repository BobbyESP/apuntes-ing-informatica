// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "PRO I - Apuntes (UVigo)",
	  description: "Apuntes de la asignatura Programación I de la Universidad de Vigo",
    locales: {
      root: {
        label: "Español",
        lang: "es",
      },
    },
    social: {
      github: "https://github.com/BobbyESP",
      linkedin: "https://www.linkedin.com/in/gabriel-font%C3%A1n-rodi%C3%B1o-a50968232/",
    },
    expressiveCode: {
      themes: ["github-dark-dimmed", "github-light-default"], //Temas de syntax highlighting (Bloques de código)
      styleOverrides: {
        borderRadius: "0.5rem", //Bordes redondeados en los bloques de código
      },
    },
    customCss: [
      './src/tailwind.css',
      "./src/styles/smoothscroll.css", //Para que el scroll sea suave entre secciones
    ],
    sidebar: [
      {
        label: "Temas",
        items: [
          // Each item here is one entry in the navigation menu.
          { label: "Introducción", slug: "contenido/introduccion" },
          { label: "Tema 1: Algoritmos y programas", items: [
            { label: "Apuntes", slug: "contenido/tema1/apuntes" }
          ] },
          { label: "Tema 2: Metodología de la programación", items: [
            { label: "Apuntes", slug: "contenido/tema2/apuntes" }
          ] },
          { label: "Tema 3: Variables e Instrucciones", items: [
            { label: "Apuntes", slug: "contenido/tema3/apuntes" },
            { label: "Ejemplos de las estructuras de control", slug: "contenido/tema3/ejemplos-estructuras-control" }
          ] },
          { label: "Tema 4: Programación estructurada", items: [
            { label: "Apuntes", slug: "contenido/tema4/apuntes" }
          ] },
        ],
      },
    ],
  }), tailwind({
    applyBaseStyles: false,
  })],
});