// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "PRO I - Apuntes (UVigo)",
	  description: "Apuntes de la asignatura Programación I de la Universidad de Vigo",
    social: {
      github: "https://github.com/withastro/starlight",
    },
    expressiveCode: {
      themes: ["github-dark-dimmed", "solarized-light"], //Temas de syntax highlighting (Bloques de código)
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
        ],
      },
    ],
  }), tailwind({
    applyBaseStyles: false,
  })],
});