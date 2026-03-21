FROM oven/bun:1 AS base
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun build ./index.ts --outdir ./dist
EXPOSE 3001
CMD ["bun", "run", "dist/index.js"]