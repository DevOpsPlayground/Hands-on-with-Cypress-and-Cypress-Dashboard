#########################################################
# stage: 1 — the build environment
#########################################################
# base image
FROM node:12.2.0-alpine as react-build

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH
WORKDIR app/

# install and cache app dependencies
COPY ./ ./
RUN yarn
RUN yarn build

FROM nginx:1.16.0-alpine as react-app
COPY --from=react-build app/build /usr/share/nginx/html
EXPOSE 80
CMD nginx "-g" "daemon off;"
