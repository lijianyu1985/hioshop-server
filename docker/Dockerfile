FROM keymetrics/pm2:latest-alpine

WORKDIR /usr/src/app

# Bundle APP files
COPY src /usr/src/app/src/
COPY view /usr/src/app/view/
COPY app /usr/src/app/app/
COPY runtime /usr/src/app/runtime/
COPY package.json /usr/src/app/.
COPY production.json /usr/src/app/.
COPY development.json /usr/src/app/.
COPY pm2.json /usr/src/app/.

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2-runtime", "start", "pm2.json" ]