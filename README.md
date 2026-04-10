# webapp-tcg-nuxt

Aplicación web para gestionar collage de cartas (Pokemon TCG y Magic: The Gathering).

## Descripción

Interfaz para generar collages.

## Páginas

- `index.vue` - Página principal
- `collage-magic.vue` - Generador de collages Magic
- `collage-pokemon.vue` - Generador de collages Pokemon

## APIs

- [Scryfall API](https://scryfall.com/docs/api) - Magic: The Gathering
- [Pokemon TCG API](https://docs.pokemontcg.io/) - Pokemon Trading Card Game

## Requisitos

- Node.js (LTS)
- Yarn

## Uso

```bash
# Instalar dependencias
yarn install

# Iniciar servidor de desarrollo
yarn dev

# Construir para producción
yarn build

# Vista previa de producción
yarn preview
```

## Tech Stack

- [Nuxt](https://nuxt.com/) - Framework Vue
- [Vue](https://vuejs.org/) - Framework UI
- [Tailwind CSS](https://tailwindcss.com/) - Estilos