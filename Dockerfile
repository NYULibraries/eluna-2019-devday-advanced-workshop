FROM node:6-alpine

ENV INSTALL_PATH /app

# Install essentials
RUN apk update && apk add build-base git

# Install node_modules with yarn
ADD package.json yarn.lock /tmp/
RUN cd /tmp && yarn install --frozen-lockfile --ignore-optional \
  && mkdir -p $INSTALL_PATH \
  && cd $INSTALL_PATH \
  && cp -R /tmp/node_modules $INSTALL_PATH \
  && rm -r /tmp/* && yarn cache clean

WORKDIR $INSTALL_PATH

ADD . .

EXPOSE 8004 3001

CMD VIEW=${VIEW} PROXY_SERVER=${PROXY_SERVER} yarn start