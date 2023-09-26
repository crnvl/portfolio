FROM node:18-alpine

RUN apk update && \
    apk add --no-cache libc6-compat autoconf automake libtool make tiff jpeg zlib zlib-dev pkgconf nasm file gcc musl-dev

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY . .

EXPOSE 3000

RUN npm install
RUN npm run build

ENTRYPOINT ["npx", "next", "start", "-p", "3000"]