# Step 1: Build the React app
FROM node:20 AS build

ARG GITHUB_TOKEN

WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json package-lock.json ./

# Configure npm to use GitHub Packages with the provided token
RUN echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" > .npmrc

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the built app with a web server
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to be used by Docker
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
