import { FC } from 'react';
import Image from 'next/image';

const Spinner: FC = () => {
  return (
    <div className={`mt-4 flex items-start justify-center`}>
      <Image src="/spinner.gif" height={40} width={40} alt="Loading..." />
    </div>
  );
};

export default Spinner;
