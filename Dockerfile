FROM node:16.16.0-alpine

# WORKDIR /app
RUN npm i -g @nestjs/cli

COPY package.json .

RUN npm install

COPY . .

EXPOSE 27017

CMD ["nest", "start"]
