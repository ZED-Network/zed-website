import { COLLATERAL_DENOMS } from '@anchor-protocol/anchor.js';
import { CW20Addr, HumanAddr } from '@libs/types';

export enum CollateralType {
  bCandle = 'bCandle',
  bEth = 'bEth',
}

export interface CollateralInfo {
  type: CollateralType;
  denom: COLLATERAL_DENOMS;
  custody: HumanAddr;
  token: CW20Addr;
}

export interface ContractAddress {
  bcandle: {
    /** addressProvider.bLunaReward() */
    reward: HumanAddr;
    /** addressProvider.bLunaHub() */
    hub: HumanAddr;
    /** addressProvider.airdrop() */
    airdropRegistry: HumanAddr;
  };
  beth: {
    /** addressProvider.bEthReward() */
    reward: HumanAddr;
  };
  moneyMarket: {
    /** addressProvider.market() */
    market: HumanAddr;

    collaterals: Record<CollateralType, CollateralInfo>;
    collateralsArray: CollateralInfo[];
    ///** addressProvider.custody() */
    //bLunaCustody: HumanAddr;
    ///** addressProvider.custody() */
    //bEthCustody: HumanAddr;
    /** addressProvider.overseer() */
    overseer: HumanAddr;
    /** addressProvider.oracle() */
    oracle: HumanAddr;
    /** addressProvider.interest() */
    interestModel: HumanAddr;

    distributionModel: HumanAddr;
  };
  liquidation: {
    /** addressProvider.liquidation() */
    liquidationContract: HumanAddr;
  };
  anchorToken: {
    /** addressProvider.gov() */
    gov: HumanAddr;
    /** addressProvider.staking() */
    staking: HumanAddr;
    /** addressProvider.community() */
    community: HumanAddr;
    /** addressProvider.distributor() */
    distributor: HumanAddr;
    /** addressProvider.investorLock() */
    investorLock: HumanAddr;
    /** addressProvider.teamLock() */
    teamLock: HumanAddr;
    /** addressProvider.collector() */
    collector: HumanAddr;
  };
  terraswap: {
    factory: HumanAddr;
    /** addressProvider.terraswapblunaLunaPair() */
    blunaLunaPair: HumanAddr;
    /** addressProvider.terraswapbAncUstPair() */
    ancUstPair: HumanAddr;
  };
  cw20: {
    /** addressProvider.bLunaToken() */
    bCandle: CW20Addr;
    /** addressProvider.bEthToken() */
    bEth: CW20Addr;
    /** addressProvider.aTerra() */
    aZED: CW20Addr;
    /** addressProvider.ANC() */
    ANC: CW20Addr;
    /** addressProvider.terraswapbAncUstLPToken() */
    AncZedLP: CW20Addr;
    /** addressProvider.terraswapblunaLunaLPToken() */
    bCandleCandleLP: CW20Addr;
  };
}
