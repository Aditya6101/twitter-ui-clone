import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const MainButton: FC = ({ children }) => {
  return (
    <button className="absolute top-3/4 bg-twitter-blue rounded-full p-2">
      {/* <FeatherIcon className="h-10 w-10 p-px text-white" /> */}
      {children}
    </button>
  );
};

export default MainButton;
