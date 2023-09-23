FROM node:16 AS build-stage
WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV CI=true


FROM build-stage as production-stage

ENV  VITE_BACKEND_URL=http://localhost:8080/api

RUN npm run build

FROM nginx:1.20-alpine
COPY --from=production-stage /usr/src/app/dist /usr/share/nginx/html
