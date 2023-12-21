FROM node:16.13.1-alpine

RUN mkdir -p /home/node/app && chown root:root /home/node/app

WORKDIR /home/node/app

COPY . /home/node/app

RUN npm config set strict-ssl=false

RUN npm i

CMD ["node", "ace", "serve"]
