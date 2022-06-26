import { Candle, NoMicro, u } from '@anchor-protocol/types';
import { Big, BigSource } from 'big.js';

describe('types/currencies', () => {
  test('type casting of nominal types', () => {
    const currency: u<Candle> = '100' as u<Candle>;

    // Can type cast to its physical type
    const str: string = currency;

    // BigSource is an union type = string | number | Big
    // Can type cast from uLuna<string> to uLuna<string | number | Big>
    const uLunaBigSource: u<Candle<BigSource>> = currency;

    // @ts-expect-error Can not type cast from uLuna<string> to Candle<string | number | Big>
    const lunaBigSource: Candle<BigSource> & NoMicro = currency;

    expect(new Set([currency, str, uLunaBigSource, lunaBigSource]).size).toBe(
      1,
    );

    function fn1(amount: string) {}

    function fn2(amount: u<Candle>) {}

    function fn3(amount: u<Candle<BigSource>>) {}

    function fn4(amount: u<Candle<Big>>) {}

    function fn5(amount: Candle & NoMicro) {}

    fn1(currency);
    fn2(currency);
    fn3(currency);
    // @ts-expect-error
    fn4(currency);
    // @ts-expect-error
    fn5(currency);

    const source: u<Candle<BigSource>> = '100' as u<Candle<BigSource>>;

    // @ts-expect-error
    const str2: string = source;

    // @ts-expect-error
    const uLunaString2: uLuna = source;

    // @ts-expect-error
    const lunaBigSource2: Candle<BigSource> & NoMicro = source;

    expect(new Set([source, str2, uLunaString2, lunaBigSource2]).size).toBe(1);
  });
});
