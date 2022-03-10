import { FC } from 'react';
import Like from './icons/Like';
import Options from './icons/Options';
import Reply from './icons/Reply';
import RT from './icons/RT';

type Props = {
  replies: number;
  rts: number;
  likes: number;
};

const IconBar: FC<Props> = ({ replies, rts, likes }) => {
  return (
    <div className="flex items-center mt-3 justify-between text-gray-500">
      <span className="flex items-center">
        <Reply className="h-5 w-5 mr-1" />
        <p>{replies}</p>
      </span>
      <span className="flex items-center">
        <RT className="h-5 w-5 mr-1" />
        <p>{rts}</p>
      </span>
      <span className="flex items-center">
        <Like className="h-5 w-5 mr-1" />
        <p>{likes}</p>
      </span>
      <Options className="h-5 w-5 mr-1" />
    </div>
  );
};

export default IconBar;
