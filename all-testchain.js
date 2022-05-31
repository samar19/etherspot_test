import {
  Sdk as EtherspotSdk,
  NetworkNames,
  EnvNames,
} from 'etherspot';

class EtherspotService {
  instances: { [network: string]: EtherspotSdk } = {};
  
  init(privateKey: string): void {
    /**
    * You can use this space to do anything else
    * you're application may require to run.
    */ 
    
    // Etherspot POA Network with built-in Faucet
    // https://try.etherspot.dev/#TopUpAccount
    this.instances[NetworkNames.Etherspot] =
      new EtherspotSdk(privateKey, {
        env: EnvNames.TestNets,
        networkName: NetworkNames.Etherspot
      });
      
    // Ropsten
    this.instances[NetworkNames.Ropsten] =
      new EtherspotSdk(privateKey, { 
        env: EnvNames.TestNets,
        networkName: NetworkNames.Ropsten
      });
    
    // Kovan
    this.instances[NetworkNames.Kovan] =
      new EtherspotSdk(privateKey, {
        env: EnvNames.TestNets,
        networkName: NetworkNames.Kovan
      });
        
    // Görli
    this.instances[NetworkNames.Goerli] =
      new EtherspotSdk(privateKey, {
        env: EnvNames.TestNets,
        networkName: NetworkNames.Goerli
      });
      
    // Sokol (xDai Testnet)
    this.instances[NetworkNames.Sokol] =
      new EtherspotSdk(privateKey, {
        env: EnvNames.TestNets,
        networkName: NetworkNames.Sokol
      });
      
    // Binance (Binance Testnet)
    this.instances[NetworkNames.BscTest] =
      new EtherspotSdk(privateKey, {
        env: EnvNames.TestNets,
        networkName: NetworkNames.bscTest
      });
      
    // Fantom (Fantom Testnet)
    this.instances[NetworkNames.FantomTest] =
      new EtherspotSdk(privateKey, {
        env: EnvNames.TestNets,
        networkName: NetworkNames.fantomTest
      });
      
    // Mumbai (Polygon, formerly known as Matic, Testnet)
    this.instances[NetworkNames.Mumbai] =
      new EtherspotSdk(privateKey, {
        env: EnvNames.TestNets,
        networkName: NetworkNames.Mumbai
      });
  }
}