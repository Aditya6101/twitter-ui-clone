import { FC } from 'react';

type Props = {
  className: string;
};

const Dots: FC<Props> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <g>
        <circle fill="#6B7280" cx="5" cy="12" r="2"></circle>
        <circle fill="#6B7280" cx="12" cy="12" r="2"></circle>
        <circle fill="#6B7280" cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  );
};

export default Dots;
