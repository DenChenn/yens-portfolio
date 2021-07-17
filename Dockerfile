FROM node:16-alpine as builder
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
RUN ls

FROM nginx:1.13.3-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
RUN cd /usr/share/nginx/html
RUN mkdir page
COPY --from=builder /app/page/ /usr/share/nginx/html/page
RUN cd /usr/share/nginx/html/page
RUN ls