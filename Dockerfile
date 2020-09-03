FROM node:10

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

#RUN npm install
# If you are building your code for production
RUN npm ci

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]
