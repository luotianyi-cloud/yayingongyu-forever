FROM node:16-alpine
COPY . /app
WORKDIR /app

ENV NODE_ENV=production
ENV STATIC_MODE=false
ENV PORT=80
RUN npm i && npm run lint && npm run build
CMD ["npm", "start"]
