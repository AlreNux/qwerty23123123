FROM node:lts-alpine

WORKDIR /client

COPY package.json yarn.lock .yarnrc.yml ./
ADD .yarn ./.yarn
RUN yarn
COPY . ./
RUN yarn build

