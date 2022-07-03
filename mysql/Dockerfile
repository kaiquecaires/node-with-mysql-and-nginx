FROM mysql:5.7
CMD [ "--innodb-use-native-aio=0" ]
COPY index.sql /docker-entrypoint-initdb.d/
