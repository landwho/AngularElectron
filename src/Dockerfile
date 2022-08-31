FROM node as build-setup

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm run build --prod

# FROM nginx 

# COPY --from=build-step /app/dist/electronApp /usr/share/nginx/html