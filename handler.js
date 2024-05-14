'use strict';

function handlePackageDelivered(payload){
  console.log(`VENDOR SAYS: Thank you for your order ${payload.customer}`);
}

module.exports = handlePackageDelivered;