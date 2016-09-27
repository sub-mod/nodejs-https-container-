FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
COPY bin/run /usr/bin/run
RUN chmod a+rwX -R .
RUN chmod +x bin/run

EXPOSE 8080
CMD [ "bin/run" ]
