FROM node AS node_base
RUN npm install -g create-react-app nodemon typescript ts-node

FROM node_base AS node_builder
COPY /src /src
WORKDIR /src/wallboard
RUN rm -rf ./src/wallboard/build
RUN yarn build

FROM httpd:latest AS web_server
COPY ./src/wallboard/build /usr/local/apache2/htdocs/
EXPOSE 80
EXPOSE 8080
