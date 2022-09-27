FROM node:latest

RUN mkdir /code
WORKDIR /code

COPY package.json .

COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

cmd ["yarn", "dev"]
