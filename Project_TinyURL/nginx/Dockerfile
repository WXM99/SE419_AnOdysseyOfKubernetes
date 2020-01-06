FROM nginx

COPY ./public/ /usr/share/nginx/public/

COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
