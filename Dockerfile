FROM node:16-alpine

WORKDIR /var/www/app

COPY package*.json ./

RUN npm install -g npm@8
RUN npm ci

COPY . .

#RUN rm -rf ./dist
RUN npm run build

EXPOSE $PORT

CMD ["node", "./server.ts"]
