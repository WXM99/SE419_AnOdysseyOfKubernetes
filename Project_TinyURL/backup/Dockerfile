FROM  java:8    
  
VOLUME /tmp
ENV host=""
# 添加 
ADD 123.jar app.jar
RUN bash -c 'touch /app.jar'
  

# Define default command. 
ENTRYPOINT ["java","-jar","/app.jar"]

#设置时区
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
