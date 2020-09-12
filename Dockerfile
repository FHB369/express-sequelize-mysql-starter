# build environment
FROM node:12-alpine

WORKDIR /var/www

COPY package.json /var/www
COPY yarn.lock /var/www


RUN yarn install
RUN yarn global add forever
COPY . /var/www

EXPOSE 8000

CMD ["forever", "index.js"]
