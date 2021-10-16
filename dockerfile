FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

ENV MONGODB_URI "mongodb://mongo:27017"

RUN npm install

COPY . .

CMD ["npm", "start"]