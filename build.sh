cd serve
# git clone https://github.com/pcrgvg/pcr_server
cd ../web
# git clone https://github.com/pcrgvg/gvg_front
cd gvg_front
# echo 'npm i'
# npm i
echo 'npm run build'
npm run build
cd ../../

docker-compose up -d --build
