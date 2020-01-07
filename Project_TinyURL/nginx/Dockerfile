FROM nginx

COPY ./public/ /usr/share/nginx/public/

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
