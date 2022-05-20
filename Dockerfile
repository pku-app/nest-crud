FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i glob rimraf

RUN npm i -g @nestjs/cli

RUN npm i --only=development

COPY . .

RUN npm run build