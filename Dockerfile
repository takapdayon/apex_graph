FROM node:10.18.0-alpine

ARG GIT_EMAIL
ARG GIT_NAME

WORKDIR /app

RUN apk update && \
    npm install -g npm

RUN apk --no-cache add git
RUN apk add sudo
RUN npm install -g @vue/cli
RUN npm update -g @vue/cl
RUN git config --global user.email GIT_EMAIL
RUN git config --global user.name GIT_NAME


EXPOSE 15000

CMD ["/bin/ash"]
