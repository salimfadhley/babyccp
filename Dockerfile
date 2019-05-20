FROM salimfadhley/node-typescript-base AS node_builder
COPY /src /src
WORKDIR /src/big_smoke_web_site
RUN rm -rf ./src/wallboard/build
RUN yarn install
RUN yarn build

FROM httpd:latest AS web_server
COPY ./src/big_smoke_web_site/build /usr/local/apache2/htdocs/
EXPOSE 80
EXPOSE 8080
