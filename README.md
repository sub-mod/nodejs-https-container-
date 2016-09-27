openssl rsa -in key.pem -out newkey.pem && mv newkey.pem key.pem
node server.js


sudo docker build -t submod/node-web-app .

sudo docker run -p 8080:8080 -d submod/node-web-app

sudo docker ps

sudo docker logs 87cf44b2af36926e30c81dc405def463b88d539b5e70ba5825381cff88c10629

sudo docker exec -it 7bd3aa8136eae562a6217ac5fef1d60320aadd2d7d0ac56623ff70dbd7352f2b  /bin/bash

