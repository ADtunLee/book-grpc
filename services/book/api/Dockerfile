FROM node:latest


WORKDIR /var/www/test/api

ADD package*.json ./

RUN npm install --production

RUN npm audit fix

ADD . .

EXPOSE 3001

CMD npm start