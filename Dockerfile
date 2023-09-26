FROM node:20.5.0

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY . .

EXPOSE 3000

RUN npm ci
RUN npm run build

ENTRYPOINT ["npm", "run", "start"]