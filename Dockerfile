FROM node:16-alpine AS builder
COPY . /app
WORKDIR /app
ENV STATIC_MODE=true
RUN npm i && npm run lint && npm run build && npm run export && \
    ls -al

FROM nginx:1.23.3
RUN sed -i '/#error_page/s/#//g' /etc/nginx/conf.d/default.conf && \
    rm -rf /usr/share/nginx/html
COPY --from=builder /app/out /usr/share/nginx/html

