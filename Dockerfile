# Stage 0 - Build Frontend Assets
FROM node:16.17-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build