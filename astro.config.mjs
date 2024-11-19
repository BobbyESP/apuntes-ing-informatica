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
                  label: "Temas",
                  items: [
                    {
                      label: "Tema 1: El cuerpo de los números reales",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/am/tema1/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 2:",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/am/tema2/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 3:",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/am/tema3/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 4: Funciones, Límites y Continuidad",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/am/tema4/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 5: Funciones Reales de una Variable Real",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/am/tema5/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 6: Integración de funciones reales de variable real",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/am/tema6/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 7:",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/am/tema7/apuntes",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "Fundamentos matemáticos",
              items: [
                {
                  label: "Temas",
                  items: [
                    {
                      label: "Tema 1: Lógica",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/fmi/tema1/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 2:",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/fmi/tema2/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 3:",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/fmi/tema3/apuntes",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "Sistemas digitales",
              items: [
                {
                  label: "Temas",
                  items: [
                    {
                      label:
                        "Tema 1: Sistemas de numeración y códigos binarios",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/sd/tema1/apuntes",
                        },
                        {
                          label: "Profundización en sistemas de numeración",
                          slug: "contenido/sd/tema1/sistemas-numeracion",
                        },
                      ],
                    },
                    {
                      label: "Tema 2:",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/sd/tema2/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 3:",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/sd/tema3/apuntes",
                        },
                      ],
                    },
                    {
                      label: "Tema 4:",
                      items: [
                        {
                          label: "Apuntes",
                          slug: "contenido/sd/tema4/apuntes",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
