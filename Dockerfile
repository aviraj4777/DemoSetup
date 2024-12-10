FROM node

WORKDIR /developer/nodejs/my-server

COPY . .

ENV PORT=3000

RUN npm ci

CMD ["npm", "start"]