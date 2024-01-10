FROM node:8
COPY . .
WORKDIR ./app
EXPOSE 7054
CMD ["node", "app.js"]

