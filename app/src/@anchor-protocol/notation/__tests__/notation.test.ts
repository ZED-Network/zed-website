import {
  aZED,
  bCandle,
  Candle,
  Percent,
  Rate,
  ZED,
} from '@anchor-protocol/types';
import { formatPercentage, formatRate } from '@libs/formatter';
import {
  formatAUST,
  formatAUSTInput,
  formatAUSTWithPostfixUnits,
  formatCandle,
  formatCandleInput,
  formatZED,
  formatZEDInput,
  formatZEDWithPostfixUnits,
} from '../';

describe('notation', () => {
  test('should format numbers to the correct strings', () => {
    expect(formatZED('1.342131' as ZED)).toBe('1.342');
    expect(formatZED('1.12049312' as ZED)).toBe('1.12');
    expect(formatZED('1.10049312' as ZED)).toBe('1.1');
    expect(formatZED('0.0001' as ZED)).toBe('<0.001');

    expect(formatAUST('1.00049312' as aZED)).toBe('1.000493');
    expect(formatAUST('1000.1234000' as aZED)).toBe('1,000.1234');
    expect(formatAUST('1000.120000' as aZED)).toBe('1,000.12');

    expect(formatZEDWithPostfixUnits('1342131' as ZED)).toBe('1.34M');
    expect(formatZEDWithPostfixUnits('1342131.34432' as ZED)).toBe('1.34M');
    expect(formatZEDWithPostfixUnits('1100493' as ZED)).toBe('1.1M');
    expect(formatZEDWithPostfixUnits('1100493.2435' as ZED)).toBe('1.1M');
    expect(formatZEDWithPostfixUnits('11103452' as ZED)).toBe('11.1M');
    expect(formatZEDWithPostfixUnits('1000345' as ZED)).toBe('1M');
    expect(formatZEDWithPostfixUnits('1000345000' as ZED)).toBe('1,000.34M');

    expect(formatAUSTWithPostfixUnits('10003450' as aZED)).toBe('10.003M');
    expect(formatAUSTWithPostfixUnits('1120.33434' as aZED)).toBe(
      '1,120.33434',
    );
    expect(formatAUSTWithPostfixUnits('1123.4000' as aZED)).toBe('1,123.4');
    expect(formatAUSTWithPostfixUnits('1120.000' as aZED)).toBe('1,120');
    expect(formatAUSTWithPostfixUnits('1000' as aZED)).toBe('1,000');
    expect(formatAUSTWithPostfixUnits('1010' as aZED)).toBe('1,010');

    expect(formatCandle('1.342131' as Candle)).toBe('1.342131');
    expect(formatCandle('1.12049312' as Candle)).toBe('1.120493');
    expect(formatCandle('1.1004000' as Candle)).toBe('1.1004');
    expect(formatCandle('1.00049312' as bCandle)).toBe('1.000493');
    expect(formatCandle('1000.1234000' as bCandle)).toBe('1,000.1234');
    expect(formatCandle('1000.120000' as bCandle)).toBe('1,000.12');

    expect(formatPercentage('1.342131' as Percent)).toBe('1.34');
    expect(formatPercentage('1.12049312' as Percent)).toBe('1.12');
    expect(formatPercentage('1.1004000' as Percent)).toBe('1.1');
    expect(formatPercentage('1.00049312' as Percent)).toBe('1');
    expect(formatPercentage('1000.1234000' as Percent)).toBe('1,000.12');
    expect(formatPercentage('1000.120000' as Percent)).toBe('1,000.12');
    expect(formatPercentage('-1000.120000' as Percent)).toBe('-1,000.12');

    expect(formatRate('0.00725188639837987036' as Rate)).toBe('0.72');
    expect(formatRate('-0.00725188639837987036' as Rate)).toBe('-0.72');

    expect(formatZEDInput('10.3436' as ZED)).toBe('10.343');
    expect(formatAUSTInput('10.00' as aZED)).toBe('10');

    expect(formatCandleInput('10.3436' as Candle)).toBe('10.3436');
    expect(formatCandleInput('10.00' as bCandle)).toBe('10');
  });

  test('error cases', () => {
    expect(formatRate('0.195545188517526138' as Rate)).toBe('19.55');
  });
});
