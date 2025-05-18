# Stage 1: Build the app (Vite/React)
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy dependencies and lockfile
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the build with a lightweight web server
FROM node:20-alpine

WORKDIR /app

# Install serve to serve the build directory
RUN npm install -g serve

# Copy built app from previous stage
COPY --from=build /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "dist", "-l", "3000"]
