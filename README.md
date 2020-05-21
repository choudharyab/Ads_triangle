# Ads Triangle Backend


[![Nodejs version](https://img.shields.io/badge/nodejs-10.16.3-blue.svg)](https://nodejs.org/en/blog/release/v10.16.3/) [![NPM](https://img.shields.io/badge/npm-6.11.3-skyblue.svg)](https://www.npmjs.com/package/npm/v/6.11.3) [![yarn](https://img.shields.io/badge/yarn-1.19.2-%23ff3300.svg)](https://github.com/yarnpkg/yarn#readme) [![Mongoose](https://img.shields.io/badge/mongoose-5.7.14-green.svg)](https://www.npmjs.com/package/mongoose/v/5.7.14)  [![Nodemon](https://img.shields.io/badge/nodemon-2.0.1-%23990099.svg)](https://www.npmjs.com/package/nodemon/v/2.0.1) 
Ads Triangle Backend project to perform crud operation  & integrate third party api.


__Table of content__
    
- [Install](#install)
- [Configure and Run](#configure-and-run)
- [Authors](#authors)
- [Contributions](#contributions)


# Install
> Pre-requirement
**node.js**, **yarn**, **mongodb**, **mysql**

#### Install The Node.Js And NMP Packages On Ubuntu 16.04 / 18.04 LTS
```sh
 >>> curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
 >>> sudo bash nodesource_setup.sh
 >>> sudo apt-get install nodejs
 >>> nodejs -v
 v10.16.3
```
#### Install NPM and Nodemon
```sh
 >>> npm install -g npm@6.11.3 nodemon@2.0.1 yarn@1.19.2
 >>> npm -v
 6.11.3
 >>> nodemon -v
 2.0.1
```

#### Install latest version of [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) for Ubuntu 16.04 (Xenial)
```sh
 >>> sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
 >>> echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
 >>> sudo apt-get update
 >>> sudo apt-get install -y mongodb-org
 >>> sudo mkdir /data/db -p
 >>> sudo service mongodb status
 Active: active (running)
```

## Configure and Run
```sh
 >>> sudo git clone https://github.com/choudharyab/Ads_triangle.git
 >>> cd Ads_Triangle
 >>> yarn install (to install project dependencies)
 >>> nodemon .
server is running!!!!
```

# Authors
- Anup Choudhary
