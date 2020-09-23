FROM node:14

COPY package*.json ./
COPY . .

RUN ["npm", "install"]

EXPOSE 81

CMD ["npm", "start"]