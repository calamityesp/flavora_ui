FROM node:latest AS build
WORKDIR /app
COPY ./package*.json ./
RUN npm ci
RUN npm install -g @angular/cli
COPY . .
RUN npm run build --configuration=production


FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/flavabase_ui/browser /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
