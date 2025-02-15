# Use the official Node.js 18 Alpine image as the base image for the build stage
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies using npm ci (ensures clean install)
RUN npm ci

# Copy the rest of the application files to the container
COPY . .

# Build the application (typically compiles TypeScript, transpiles, etc.)
RUN npm run build


# Use the official Node.js 18 Alpine image as the base image for the production stage
FROM node:18-alpine AS production

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the builder stage (for consistency)
COPY --from=builder /usr/src/app/package*.json ./

# Copy node_modules from the builder stage to avoid reinstalling dependencies
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copy the built application (dist folder) from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Set the environment variable to production
ENV NODE_ENV=production

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]
