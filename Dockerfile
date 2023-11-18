FROM node:18.15.0 as build
WORKDIR /cloud-frontend

ENV PORT 80

COPY package*.json .
RUN npm install
COPY . .

RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /cloud-frontend/dist /usr/share/nginx/html

