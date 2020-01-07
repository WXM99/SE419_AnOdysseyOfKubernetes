FROM nginx

COPY ./public/ /usr/share/nginx/public/

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./cmd.sh /user/share/nginx/cmd.sh

EXPOSE 80

ENTRYPOINT ["/user/share/nginx/cmd.sh"]
