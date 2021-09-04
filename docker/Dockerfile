FROM mhart/alpine-node:12

WORKDIR /hio
COPY package.json /hio/package.json
RUN npm i --production --registry=https://registry.npm.taobao.org

COPY src /hio/src
COPY view /hio/view
#COPY www /hio/www
COPY production.js /hio/production.js

EXPOSE 8360
CMD [ "node", "/hio/production.js" ]