import { formatZEDWithPostfixUnits } from '@anchor-protocol/notation';
import { ZED } from '@anchor-protocol/types';
import { AnimateNumber } from '@libs/ui';
import React, { useCallback, useState } from 'react';

export default {
  title: 'components/AnimateNumber',
};

export const Basic = () => {
  const [n, setN] = useState<ZED>('1000' as ZED);

  const updateNumber = useCallback(() => {
    setN(
      Math.floor(
        Math.random() * (Math.random() > 0.5 ? 100000000 : 100000),
      ).toString() as ZED,
    );
  }, []);

  return (
    <div>
      <AnimateNumber format={formatZEDWithPostfixUnits}>{n}</AnimateNumber>
      <div>
        <button onClick={updateNumber}>Update Number</button>
      </div>
    </div>
  );
};
