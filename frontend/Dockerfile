FROM node:14

COPY package*.json ./
COPY . .

RUN ["npm", "install"]

EXPOSE 80

CMD ["npm", "start"]