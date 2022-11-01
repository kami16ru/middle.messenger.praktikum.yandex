FROM node:16-alpine

WORKDIR /var/www/app

COPY package*.json ./

RUN npm install -g npm@8
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "./server.ts"]
