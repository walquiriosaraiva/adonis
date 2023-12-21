FROM node:lts-alpine

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package.json yarn.* ./

#RUN apk add --no-cache git

COPY . /home/node/app/

RUN npm config set strict-ssl=false

RUN chown -R node:node /home/node

RUN npm install

USER node

EXPOSE 3333

#CMD node ace serve --watch & node ace scheduler:run
ENTRYPOINT ["node", "ace", "serve", "--watch"]
