FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json pnpm-lock.yaml* ./

RUN corepack enable && corepack prepare pnpm@latest --activate

RUN pnpm install

COPY . .

RUN pnpm build

RUN pnpm prune --prod

EXPOSE 3000

CMD ["pnpm", "start"]
