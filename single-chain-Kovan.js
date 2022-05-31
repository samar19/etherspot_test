import { Sdk, NetworkNames, randomPrivateKey, EnvNames } from 'etherspot';

const privateKey = randomPrivateKey();
let sdk: Sdk

/**
* Replace `privateKey` with your own private key
* or Etherspot Authentication method.
*/
sdk = new Sdk({
  privateKey,
}, {
  env: EnvNames.TestNets,
  networkName: 'kovan' as NetworkNames, //
});

console.info('SDK created on Kovan testnet.');