FROM node:15.11.0-alpine AS build

WORKDIR /usr/src/app
COPY . .
RUN npm i && npm run build

# COPY --from=builder /usr/src/app/dist/ .
EXPOSE 3000

CMD ["npm", "run", "start:prod"]