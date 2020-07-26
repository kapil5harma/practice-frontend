# Step 1: build environment
FROM node:alpine as react-build
WORKDIR /app
COPY . ./
RUN npm i
RUN npm run build:staging

# Stage 2: staging environment
FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
