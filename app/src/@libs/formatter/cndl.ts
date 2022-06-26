import { Candle, u, ZED } from '@libs/types';

export function stripUUSD(uusd: string): u<ZED> {
  return uusd.substring(0, uusd.length - 4) as u<ZED>;
}

export function stripUCandle(ucandle: string): u<Candle> {
  return ucandle.substring(0, ucandle.length - 5) as u<Candle>;
}
