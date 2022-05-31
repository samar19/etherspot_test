import { Sdk, NetworkNames, randomPrivateKey } from 'etherspot';

const privateKey = randomPrivateKey();
let sdk: Sdk

/**
* Replace `privateKey` with your own private key
* or Etherspot Authentication method.
*/
sdk = new Sdk({
  privateKey,
}, {
  networkName: 'bsc' as NetworkNames,
});

console.info('SDK created');