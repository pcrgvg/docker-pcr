# Base images 基础镜像
FROM redis:6.0.10

WORKDIR /root
RUN mkdir server
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone
COPY pcr_server/ /root/server/
WORKDIR /root/server
ENV NODE_ENV=prod
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm i


EXPOSE 6379

#CMD 运行以下命令
CMD ["npm", "run", "prod"]
