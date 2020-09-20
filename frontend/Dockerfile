FROM node:14

COPY package*.json ./
COPY . .

RUN ["npm", "install"]

EXPOSE 443

CMD ["npm", "start"]