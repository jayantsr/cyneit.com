# Stage 0 - Build Frontend Assets
FROM node:16.17-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install node modules
RUN npm install --force

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# Stage 1 - Serve with Nginx
FROM nginx:stable-alpine

# Copy the build output to Nginx's default public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx is using
EXPOSE 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
