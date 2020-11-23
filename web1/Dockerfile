# Base images 基础镜像
FROM nginx

WORKDIR /root
COPY pcr/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/nginx.conf



EXPOSE 80

#CMD 运行以下命令
CMD ["nginx", "-g", "daemon off;"]
