FROM node:16-alpine

WORKDIR /usr/app/api

COPY ./package.json .

RUN npm i

COPY . .

EXPOSE 4000

RUN npm run build

CMD [ "npm", "run", "start:prod" ]
