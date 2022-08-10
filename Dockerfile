FROM node:alpine

WORKDIR /usr/visits-app

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD [ "npm", "start" ]