import {
  Sdk as EtherspotSdk,
  NetworkNames,
} from 'etherspot';

class EtherspotService {
  instances: { [network: string]: EtherspotSdk } = {};
  
  init(privateKey: string): void {
    /**
    * You can use this space to do anything else
    * you're application may require to run.
    */ 
    
    // Mainnet
    this.instances[NetworkNames.Mainnet] =
      new EtherspotSdk(privateKey, { networkName: NetworkNames.Mainnet });
      
    // xDai
    this.instances[NetworkNames.Xdai] =
      new EtherspotSdk(privateKey, { networkName: NetworkNames.Xdai });
    
    // Binance Smart Chain
    this.instances[NetworkNames.Bsc] =
      new EtherspotSdk(privateKey, { networkName: NetworkNames.Bsc });
        
    // Polygon, formerly known as Matic
    this.instances[NetworkNames.Matic] =
      new EtherspotSdk(privateKey, { networkName: NetworkNames.Matic });
      
    // Fantom
    this.instances[NetworkNames.Fantom] =
      new EtherspotSdk(privateKey, { networkName: NetworkNames.Fantom });
  }
}