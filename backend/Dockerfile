# Use the official Node.js image
FROM node:16

WORKDIR /usr/src/app

RUN npm install -g typescript

COPY package*.json ./

# Install backend dependencies
RUN npm install --only=production

RUN npm install --save-dev

COPY . .

RUN npm run tsc

CMD ["npm", "start"]
