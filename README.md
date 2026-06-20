# Portfolio — Amirhossein Rezazadeh

Personal portfolio site for [Amirhossein Rezazadeh](https://github.com/hoseinrza) — Frontend Engineer & Full Stack Developer. Built with React, TypeScript, and an interactive WebGL background.

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev/build tooling
- [Tailwind CSS](https://tailwindcss.com/) for styling, with CSS variables for light/dark theming
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Three.js](https://threejs.org/) for the animated particle/shader background
- [Framer Motion](https://www.framer.com/motion/) for UI animations
- [React Router](https://reactrouter.com/) for routing

## Getting Started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5181)
npm run build    # type-check and build for production
npm run preview  # preview the production build
npm run lint     # type-check only
```

## Project Structure

```
src/
  background/   3D/shader background scene (particles, molecular field, fluid shader)
  components/    Shared UI components (Nav, Footer, Cards, Badges, etc.)
  data/          Static content (site info, projects, skills, experience)
  lib/           Hooks (e.g. theme toggle)
  pages/         Route-level pages (Home, Project/Case Study detail, Blog, 404)
```

## Theming

Light/dark mode is controlled by a `dark` class on `<html>` (toggled via [`useTheme`](src/lib/useTheme.ts) and persisted to `localStorage`), with colors driven by CSS variables in [`src/index.css`](src/index.css). The WebGL background listens for theme changes and re-colors itself to match.

## License

Personal project — all rights reserved.
