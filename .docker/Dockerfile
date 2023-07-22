# build environment
FROM node:16.15.1-stretch as build
ARG API_URL
ENV REACT_APP_API_URL=$API_URL
WORKDIR /app
COPY package.json ./
RUN npm i --silent
COPY . ./
RUN export DISABLE_ESLINT_PLUGIN=true && export TSC_COMPILE_ON_ERROR=true && npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY .docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]