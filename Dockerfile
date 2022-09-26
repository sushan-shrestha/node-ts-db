# STAGE: Development
FROM node:14-alpine AS dev

# Port to listen on
EXPOSE 8002

# Copy app and install packages
WORKDIR /app
COPY . /app/

RUN yarn

# Default app commands
CMD ["yarn", "start:dev"]