FROM node:latest

RUN mkdir /code
WORKDIR /code

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

cmd ["yarn", "dev"]
