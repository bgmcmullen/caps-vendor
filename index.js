'use strict';

const events = require('../eventPool.js');

const Chance = require('chance');

const handlePackageDelivered = require('./handler.js');

// Creating a new Chance instance
const chance = new Chance();



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
  events.emit('package-available', packageInfo);
}, 2000)

events.on('package-delivered', handlePackageDelivered);
