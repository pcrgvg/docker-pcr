# Base images 基础镜像
FROM node:current-slim

WORKDIR /root
RUN mkdir server
COPY pcr_server/ /root/server/
WORKDIR /root/server
ENV NODE_ENV=prod
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm i


EXPOSE 5000

#CMD 运行以下命令
CMD ["npm", "run", "prod"]
