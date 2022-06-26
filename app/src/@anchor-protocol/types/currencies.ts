import { NominalType } from '@libs/types';

// CW20 currencies
export type aZED<T = string> = T & NominalType<'aust'>;
export type ANC<T = string> = T & NominalType<'anc'>;
export type bCandle<T = string> = T & NominalType<'bcndl'>;
export type bEth<T = string> = T & NominalType<'beth'>;
export type AncUstLP<T = string> = T & NominalType<'anc_ust_lp'>;
export type bCandleCandleLP<T = string> = T & NominalType<'bcandle_candle_lp'>;

// Union currencies
export type aToken<T = string> = T & NominalType<'azed'>;
export type bAsset<T = string> = T & NominalType<'bcandle' | 'beth'>;

export type LPToken<T = string> = T &
  NominalType<'anc_zed_lp' | 'bcandle_candle_lp'>;
