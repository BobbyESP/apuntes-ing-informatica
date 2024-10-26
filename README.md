# Apuntes Ingeniería Informática UVigo

Este proyecto contiene apuntes de Ingeniería Informática para la Universidad de Vigo, organizados y presentados con **Astro** y **Starlight**.

## 🚀 Estructura del Proyecto

Dentro del proyecto de Astro + Starlight, encontrarás las siguientes carpetas y archivos:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

- **`src/content/docs/`**: Aquí es donde Starlight busca archivos `.md` o `.mdx` y los convierte en rutas según el nombre del archivo.
    * Es importante destacar que hay que añadir las rutas en `astro.config.mjs`
- **`src/assets/`**: Carpeta para agregar imágenes que puedes insertar en los archivos Markdown con enlaces relativos.
    * Formato recomendado: `webp`
- **`public/`**: Archivos estáticos, como el icono de la web.

## 🛠️ Instrucciones para construir el proyecto desde cero

Si no tienes experiencia previa, sigue estos pasos para clonar y construir el proyecto:

### Requisitos previos

Antes de empezar, asegúrate de tener instalado lo siguiente:
- **Visual Studio Code** y las siguientes extensiones.
    - `Astro` del creador `Astro`
    - `MDX` del creador `unified`
    - `Prettier` del creador `Prettier`
- **Git**: Para clonar el proyecto (puedes descargarlo aquí: [Git](https://git-scm.com/)).
- **Node.js**: Necesario para ejecutar el proyecto (descárgalo aquí: [Node.js](https://nodejs.org/)).
- **pnpm**: Un administrador de paquetes alternativo (instálalo ejecutando `npm install -g pnpm` en la terminal después de instalar Node.js).

Para comprobar si están instalados, abre la terminal y ejecuta:

```bash
git --version
node --version
pnpm --version
```

Si estos comandos devuelven un número de versión, ya estás listo para comenzar.

### Cómo clonar este proyecto

1. **Abre la terminal** en tu computadora (o símbolo del sistema en Windows).
2. Ejecuta el siguiente comando para clonar el proyecto:

   ```bash
   git clone https://github.com/BobbyESP/apuntes-ing-informatica.git
   ```

3. Luego de que el proyecto se descargue, entra a la carpeta del proyecto:

   ```bash
   cd apuntes-ing-informatica
   ```

### Cómo instalar las dependencias

1. Asegúrate de estar en la carpeta del proyecto (`apuntes-ing-informatica`).
2. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   pnpm install
   ```

Esto descargará todos los paquetes necesarios para que el proyecto funcione correctamente.

### Cómo ejecutar el proyecto localmente

Para ver el proyecto en tu navegador mientras trabajas en él, utiliza el siguiente comando:

```bash
pnpm run dev
```

Este comando iniciará un servidor local. Normalmente, podrás acceder al proyecto en tu navegador ingresando a `http://localhost:4321`. Desde aquí, podrás ver los apuntes y realizar cambios en tiempo real.

### Cómo construir el proyecto para producción (no necesario en nuestro caso)

Si deseas crear una versión final del proyecto (optimizada para desplegarla en un servidor), puedes usar el siguiente comando:

```bash
pnpm run build
```

Este comando generará una carpeta `dist` con todos los archivos listos para ser desplegados en un servidor.

## 🧞 Comandos adicionales

| Comando                    | Acción                                                  |
| :------------------------- | :------------------------------------------------------ |
| `pnpm install`             | Instala las dependencias                                |
| `pnpm run dev`             | Inicia el servidor local en `localhost:4321`            |
| `pnpm run build`           | Construye el sitio de producción en `./dist/`           |
| `pnpm run preview`         | Previsualiza tu sitio construido localmente             |
| `pnpm run astro ...`       | Ejecuta comandos de CLI como `astro add`, `astro check` |
| `pnpm run astro -- --help` | Muestra ayuda sobre el uso de la CLI de Astro           |

## 👀 ¿Quieres aprender más?

Consulta la [documentación de Starlight](https://starlight.astro.build/) o lee la [documentación de Astro](https://docs.astro.build).
