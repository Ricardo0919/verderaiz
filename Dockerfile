# Build Stage
FROM node:18-alpine AS build

# Install dependencies only when needed
RUN apk add --no-cache libc6-compat

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Run the next build process and generate the artifacts
RUN npm run build

# Run a simple ls to check contents
RUN echo ls -la

# Runtime Stage
FROM node:18-alpine

# Install latest dependencies and add dumb-init package for signal handling
RUN apk update && apk upgrade && apk add dumb-init && adduser -D nextuser

# Set working directory
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build --chown=nextuser:nextuser /app/public ./public
COPY --from=build --chown=nextuser:nextuser /app/.next/standalone ./
COPY --from=build --chown=nextuser:nextuser /app/.next/static ./.next/static

# Use a non-root user for security
USER nextuser

# Expose port 3000
EXPOSE 3000

# Set environment variables
ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production

# Start the app using dumb-init to manage signals
CMD ["dumb-init", "node", "server.js"]
