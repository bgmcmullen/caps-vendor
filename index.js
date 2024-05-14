'use strict';

const io = require('socket.io-client');


const Chance = require('chance');

const handlePackageDelivered = require('./handler.js');

// Creating a new Chance instance
const chance = new Chance();

require('dotenv').config();

const URL = process.env.URL;

const hubConnection = io.connect(URL);

setInterval( () => {
  const randomStoreName = chance.company();
  const randomName = chance.name();
  const randomAddress = chance.address();
  const randomOrderId = chance.string({ length: 10, alpha: true, numeric: true });

  const packageInfo = {
    store: randomStoreName,
    orderId: randomOrderId,
    customer: randomName,
    address: randomAddress
  }
  console.log('----------------------');
  hubConnection.emit('package-available', packageInfo);
}, 2000)

hubConnection.on('package-delivered', handlePackageDelivered);
