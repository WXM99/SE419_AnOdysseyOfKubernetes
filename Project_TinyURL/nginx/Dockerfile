FROM nginx

COPY ./public/ /usr/share/nginx/public/

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./cmd.sh /cmd.sh

EXPOSE 80

RUN /cmd.sh

CMD [ "nginx", "-g", "daemon off;" ]
