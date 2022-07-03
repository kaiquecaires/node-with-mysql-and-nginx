FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80/tcp

CMD ["nginx", "-g", "daemon off;"]
