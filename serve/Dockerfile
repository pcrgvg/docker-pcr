# Base images 基础镜像
# FROM node:current-slim
FROM buildkite/puppeteer:7.1.0

WORKDIR /root
RUN mkdir server
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone
COPY pcr_server/ /root/server/
WORKDIR /root/server
ENV NODE_ENV=prod
# RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN npm i 


EXPOSE 5000

#CMD 运行以下命令
CMD ["npm", "run", "prod"]
