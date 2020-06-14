### STAGE 1: Build ###
#FROM node:12.7-alpine AS build
#WORKDIR /usr/src/app
#COPY package.json ./
#RUN npm install
#COPY . .
#RUN npm run build

### STAGE 2: Run ###

FROM nginx:1.17.1-alpine
#WORKDIR /usr/share/nginx/html
COPY dist/portfolio-app usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /usr/src/app/dist/portfolio-app /usr/share/nginx/html

#EXPOSE 4300 80
#ENTRYPOINT ["nginx", "-g", "daemon on;"]

