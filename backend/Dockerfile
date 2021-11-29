FROM node:12
WORKDIR /usr/src/app/server
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3001
CMD [ "node", "index.js" ]