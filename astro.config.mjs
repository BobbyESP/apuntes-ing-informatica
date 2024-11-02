// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://uvigo-informatica.vercel.app",
  integrations: [
    starlight({
      title: "Apuntes Ing. Informática",
      description:
        "Apuntes de la carrera de Ingeniería Infomática de la Universidad de Vigo",
      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
      },
      social: {
        github: "https://github.com/BobbyESP",
        linkedin:
          "https://www.linkedin.com/in/gabriel-font%C3%A1n-rodi%C3%B1o-a50968232/",
      },
      expressiveCode: {
        themes: ["github-dark-dimmed", "github-light-default"], //Temas de syntax highlighting (Bloques de código)
        styleOverrides: {
          borderRadius: "0.5rem", //Bordes redondeados en los bloques de código
        },
      },
      customCss: [
        "./src/tailwind.css",
        "./src/styles/smoothscroll.css", //Para que el scroll sea suave entre secciones
      ],
      sidebar: [
        { label: "Introducción", slug: "contenido/introduccion" },
        {
          label: "Asignaturas",
          items: [
            {
              label: "Programación I",
              items: [
                {
                  label: "Temas",
                  items: [
                    {
                      label: "Tema 1: Algoritmos y programas",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/proi/tema1/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 2: Metodología de la programación",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/proi/tema2/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 3: Variables e Instrucciones",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/proi/tema3/apuntes",
                        },
                        {
                          label: "Ejemplos de las estructuras de control",
                          slug: "contenido/proi/tema3/ejemplos-estructuras-control",
                        },
                        {
                          label: "Documentación de funciones",
                          slug: "contenido/proi/tema3/documentacion",
                        },
                      ],
                    },
                    {
                      label: "Tema 4: Programación estructurada",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/proi/tema4/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 5: Funciones y procedimientos",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/proi/tema5/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 6: Depuración y pruebas",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/proi/tema6/apuntes",
                        },
                        {
                          label: "Librerías",
                          slug: "contenido/proi/tema6/librerias",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "Análisis Matemático",
              items: [
                {
                  label: "Tema 1",
                  slug: "contenido/am/tema1/apuntes",
                },
              ],
            },
            { label: "Fundamentos matemáticos", items: [] },
            { label: "Sistemas digitales", items: [] },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
