# Stage 1: Build the React Application
FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port (Cloud Run defaults to 8080)
EXPOSE 8080
# Copy default nginx configuration to listen on 8080 and handle SPA routing
RUN sed -i 's/listen  *80;/listen 8080;/' /etc/nginx/conf.d/default.conf
RUN sed -i '/location \/ {/a \        try_files $uri $uri/ /index.html;' /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
