import React from 'react';

type LottoNumbersProps = {
  generateNumbers: () => void;
};

const LottoNumbers: React.FC<LottoNumbersProps> = ({ generateNumbers }) => {
  return <button onClick={generateNumbers}>Generate Lotto Numbers</button>;
};

export default LottoNumbers;