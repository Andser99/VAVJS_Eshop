FROM node:12 as base
WORKDIR /usr/src/app/server
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent && mv node_modules ../

FROM base as test
COPY . .
CMD [ "npm", "test" ]

FROM base as prod
COPY . .
EXPOSE 3001
CMD [ "node", "index.js" ]