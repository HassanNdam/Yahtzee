FROM node:latest

EXPOSE 3001

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY package.json package.json

RUN npm install