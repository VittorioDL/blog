# STEP 1: Costruzione dell'app
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# STEP 2: Esecuzione dell'app in produzione
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app ./
RUN npm ci --production
EXPOSE 1337
CMD ["npm", "run", "start"]
