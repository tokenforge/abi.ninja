FROM node:16.18.0 as build-stage

RUN apt-get update && apt-get install git

WORKDIR /usr/app

RUN npm install craco
COPY package*.json ./
COPY yarn.lock ./
COPY . .

RUN yarn install
RUN yarn build

# production stage
FROM nginxinc/nginx-unprivileged:stable-alpine as production-stage

COPY  --chown=nginx:root --from=build-stage /usr/app/packages/react-app/build /usr/share/nginx/html
COPY --chown=nginx:root ./docker/nginx-app/default.conf.template /etc/nginx/templates/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]