FROM node:16-alpine
COPY . /app
WORKDIR /app

ARG NEXT_PUBLIC_CDN_LOCATION=${NEXT_PUBLIC_CDN_LOCATION}
ENV NEXT_PUBLIC_CDN_LOCATION=${NEXT_PUBLIC_CDN_LOCATION}
ENV NODE_ENV=production
ENV STATIC_MODE=false
ENV PORT=80
RUN apk update && apk add curl && \
	npm i && npm run lint && npm run build
CMD ["npm", "start"]
