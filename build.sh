cd serve
git clone https://github.com/pcrgvg/pcr_server
cd ../web
git clone https://github.com/pcrgvg/gvg_front
cd gvg_front
echo 'cnpm i'
cnpm i
echo 'npm run build'
npm run build
cd ../../

docker-compose up -d --build
