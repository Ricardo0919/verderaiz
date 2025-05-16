# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Run (servidor de producción)
FROM node:18-alpine

WORKDIR /app

# Copiamos solo lo necesario para standalone
COPY --from=builder /app/.next/standalone ./ 
COPY --from=builder /app/public ./public 
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
