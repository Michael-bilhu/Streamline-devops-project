FROM nginx:alpine

RUN apk add --no-cache bash

COPY . /usr/share/nginx/html

CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/env.template.js > /usr/share/nginx/html/env.js && nginx -g 'daemon off;'"]
