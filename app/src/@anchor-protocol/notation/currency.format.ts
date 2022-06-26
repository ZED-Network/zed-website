import {
  ANC,
  AncZedLP,
  aZED,
  bAsset,
  bCandle,
  bCandleCandleLP,
  LPToken,
  Candle,
  Token,
  ZED,
} from '@anchor-protocol/types';
import { formatDemimal, formatInteger, MICRO } from '@libs/formatter';
import { u } from '@libs/types';
import big, { BigSource } from 'big.js';

// ---------------------------------------------
// render
// ---------------------------------------------
export function mapDecimalPointBaseSeparatedNumbers<T>(
  n: string,
  mapper: (i: string, d: string | undefined) => T,
): T {
  const [i, d] = n.toString().split('.');
  return mapper(i, d);
}

// ---------------------------------------------
// formatters
// ---------------------------------------------
export const d2Formatter = formatDemimal({ decimalPoints: 2, delimiter: true });
export const d3InputFormatter = formatDemimal({
  decimalPoints: 3,
  delimiter: false,
});
export const d3Formatter = formatDemimal({ decimalPoints: 3, delimiter: true });
export const d6InputFormatter = formatDemimal({
  decimalPoints: 6,
  delimiter: false,
});
export const d6Formatter = formatDemimal({ decimalPoints: 6, delimiter: true });
export const iFormatter = formatInteger({ delimiter: true });

// ---------------------------------------------
// constants
// ---------------------------------------------
export const ZED_INPUT_MAXIMUM_INTEGER_POINTS = 14;
export const ZED_INPUT_MAXIMUM_DECIMAL_POINTS = 3;

export const AZED_INPUT_MAXIMUM_INTEGER_POINTS = 14;
export const AZED_INPUT_MAXIMUM_DECIMAL_POINTS = 6;

export const CANDLE_INPUT_MAXIMUM_INTEGER_POINTS = 14;
export const CANDLE_INPUT_MAXIMUM_DECIMAL_POINTS = 6;

export const ANC_INPUT_MAXIMUM_INTEGER_POINTS = 14;
export const ANC_INPUT_MAXIMUM_DECIMAL_POINTS = 6;

export const MILLION = 1000000;

// ---------------------------------------------
// specific format functions
// ---------------------------------------------
export function formatZEDInput(n: ZED<BigSource>): ZED {
  return d3InputFormatter(n) as any;
}

export function formatAZEDInput(n: aZED<BigSource>): aZED {
  return d6InputFormatter(n) as any;
}

export function formatCandleInput<
  C extends Candle<BigSource> | bCandle<BigSource>,
>(
  n: C,
): C extends Candle<BigSource>
  ? Candle
  : C extends bCandle<BigSource>
  ? bCandle
  : never {
  return d6InputFormatter(n) as any;
}

export function formatBAssetInput<C extends bAsset<BigSource>>(n: C): bAsset {
  return d6InputFormatter(n) as any;
}

export function formatANCInput<C extends ANC<BigSource>>(
  n: C,
): C extends ANC<BigSource> ? ANC : never {
  return d6InputFormatter(n) as any;
}

export function formatLPInput<C extends LPToken<BigSource>>(
  n: C,
): C extends AncZedLP<BigSource>
  ? AncZedLP
  : C extends bCandleCandleLP<BigSource>
  ? bCandleCandleLP
  : C extends LPToken<BigSource>
  ? LPToken
  : never {
  return d6InputFormatter(n) as any;
}

export function formatANC(n: ANC<BigSource>): string {
  return d6Formatter(n);
}

export function formatLP(n: LPToken<BigSource>): string {
  return d6Formatter(n);
}

export function formatANCWithPostfixUnits(n: ANC<BigSource>): string {
  const bn = big(n);
  return bn.gte(MILLION) ? d3Formatter(bn.div(MILLION)) + 'M' : formatANC(n);
}

export function formatZED(n: ZED<BigSource>): string {
  if (big(n).gt(0) && big(n).lt(0.001)) {
    return '<0.001';
  }
  return d3Formatter(n);
}

export function formatZEDWithPostfixUnits(n: ZED<BigSource>): string {
  const bn = big(n);
  return bn.gte(MILLION) ? d2Formatter(bn.div(MILLION)) + 'M' : formatZED(n);
}

export function formatAZED(n: aZED<BigSource>): string {
  return d6Formatter(n);
}

export function formatAZEDWithPostfixUnits(n: aZED<BigSource>): string {
  const bn = big(n);
  return bn.gte(MILLION) ? d3Formatter(bn.div(MILLION)) + 'M' : d6Formatter(bn);
}

export function formatCandle(
  n: Candle<BigSource> | bCandle<BigSource>,
): string {
  return d6Formatter(n);
}

export function formatCandleWithPostfixUnits(
  n: Candle<BigSource> | bCandle<BigSource>,
): string {
  const bn = big(n);
  return bn.gte(MILLION) ? d3Formatter(bn.div(MILLION)) + 'M' : d3Formatter(bn);
}

export function formatBAsset(n: bAsset<BigSource>): string {
  return d6Formatter(n);
}

export function formatBAssetWithPostfixUnits(n: bAsset<BigSource>): string {
  const bn = big(n);
  return bn.gte(MILLION) ? d3Formatter(bn.div(MILLION)) + 'M' : d3Formatter(bn);
}

// ---------------------------------------------
// unspecific format functions
// ---------------------------------------------
export function formatUTokenDecimal2(n: u<Token<BigSource>>): string {
  const bn = big(n).div(MICRO);
  return bn.gte(MILLION) ? d2Formatter(bn.div(MILLION)) + 'M' : d2Formatter(bn);
}

export function formatTokenInteger(n: Token<BigSource>): string {
  return big(n).gte(MILLION) ? iFormatter(n) + 'M' : iFormatter(n);
}

export function formatUTokenInteger(n: u<Token<BigSource>>): string {
  const bn = big(n).div(MICRO);
  return bn.gte(MILLION) ? iFormatter(bn.div(MILLION)) + 'M' : iFormatter(bn);
}

export function formatUTokenIntegerWithoutPostfixUnits(
  n: u<Token<BigSource>>,
): string {
  const bn = big(n).div(MICRO);
  return iFormatter(bn);
}

export function formatTokenIntegerWithoutPostfixUnits(
  n: u<Token<BigSource>>,
): string {
  return iFormatter(n);
}
