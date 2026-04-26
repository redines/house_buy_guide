# House Buying Guide

A project documenting what I learned when buying a house in Sweden — capturing the information I found hard to come by during the process.

I am also using this project as an opportunity to improve my React skills, building the frontend with React Router while using AI assistance for styling. You can read more about how I use AI in my [AI policy](https://github.com/redines/redines/blob/main/docs/ai-policy.md).

This is also my first experiment with being funded via [Ko-fi](https://ko-fi.com/). If this guide has been helpful to you, any support to keep the site running is greatly appreciated ❤️

## Tech Stack

- [Bun](https://bun.sh/) — runtime and package manager
- [React 19](https://react.dev/) + [React Router 7](https://reactrouter.com/) — UI framework with file-based routing and server-side rendering
- [TailwindCSS 4](https://tailwindcss.com/) — styling
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Vite](https://vite.dev/) — dev server and build tool

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh/docs/installation) installed.

### Installation

```bash
bun install
```

> Using npm instead? Run `npm install`. Note that the Docker build also uses npm.

### Development

Start the development server with hot module replacement:

```bash
bun run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `bun run dev` | Start the development server with HMR |
| `build` | `bun run build` | Create a production build |
| `start` | `bun run start` | Serve the production build locally |
| `typecheck` | `bun run typecheck` | Run TypeScript type checking |

## Deployment

### Docker

Build and run the app in a container:

```bash
docker build -t house-buy-guide .
docker run -p 3000:3000 house-buy-guide
```

The Docker image is based on Node 20 and serves the production build via `react-router-serve` on port 3000.

Supported platforms include:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Fly.io
- Railway
- Digital Ocean App Platform

### Self-Hosted (Node)

Build the app and deploy the output:

```bash
bun run build
```

The build output structure:

```
├── package.json
├── bun.lockb
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side rendering code
```

Start the server with `bun run start` (or `npm run start`).

## Support

If this guide has been helpful, consider supporting the project on [Ko-fi](https://ko-fi.com/) — it helps keep the site running ❤️
