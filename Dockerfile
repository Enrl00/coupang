FROM node:19.4-alpine
WORKDIR '/coupang'
ENV PATH='./node_modules/.bin:$PATH'

COPY package.json .
# RUN npm install

COPY . .
# EXPOSE 3000
RUN npm run build
CMD ['npm','start'] 