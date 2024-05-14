FROM node:latest

EXPOSE 5173

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY /app/package.json package.json

RUN npm install