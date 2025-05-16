# Etapa 1: Build
FROM node:18-alpine AS builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa 2: Run
FROM node:18-alpine

RUN apk add --no-cache dumb-init && adduser -D nextuser

WORKDIR /app

COPY --from=builder --chown=nextuser:nextuser /app/.next/standalone ./
COPY --from=builder --chown=nextuser:nextuser /app/public ./public
COPY --from=builder --chown=nextuser:nextuser /app/.next/static ./.next/static

USER nextuser

EXPOSE 3000
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

CMD ["dumb-init", "node", "server.js"]
