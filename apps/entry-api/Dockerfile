# Use alpine node base image
FROM node:22-alpine as builder

# Set working directory inside the docker node
WORKDIR /app

# Copy package files and install dependencies
COPY ./package*.json ./
RUN npm install

# Copy the rest of the application code
COPY ./ ./
RUN npm run build entry-api

RUN npm install --omit=dev


FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist/apps/entry-api ./
COPY --from=builder /app/node_modules ./node_modules

ARG PORT=3000
# Expose the application port
EXPOSE $PORT

CMD ["node", "main.js"]