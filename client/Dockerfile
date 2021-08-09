FROM node:lts-alpine

WORKDIR /client

COPY package.json .

RUN npm install

COPY . .

# CMD bash -c 'while !</dev/tcp/db/5432; do sleep 1; done; npm start'

CMD [ "npm", "start" ]