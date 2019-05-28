FROM salimfadhley/node-typescript-base AS node_builder
COPY /src /src
WORKDIR /src/babyccp
RUN rm -rf ./src/wallboard/build
RUN npm install
RUN npm build

FROM httpd:latest AS web_server
COPY ./src/babyccp/build /usr/local/apache2/htdocs/
EXPOSE 80
EXPOSE 8080
