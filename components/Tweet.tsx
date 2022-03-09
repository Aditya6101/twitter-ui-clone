import { FC } from 'react';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';

type Props = {
  profile_pic: string;
  username: string;
  name: string;
  tweet: string;
  tweet_at: Date;
};

const Tweet: FC<Props> = ({ profile_pic, username, name, tweet, tweet_at }) => {
  return (
    <div className="flex items-start px-4 py-3 border-b border-gray-200">
      {/* Profile pic */}
      <Image
        src={profile_pic}
        alt="profile_pic"
        height={40}
        width={40}
        className="rounded-full"
      />
      {/* Tweet body */}
      <div className="flex-1 flex flex-col ml-3 min-w-0">
        {/* Tweet header */}
        <p className="text-sm flex">
          <span className="truncate">
            <span className="font-bold text-black">{name}</span>{' '}
            <span className="pl-1 text-gray-500 font-semibold">
              @{username}
            </span>
          </span>
          <span className="flex-shrink-0 text-gray-500">
            <span className="px-1 font-bold">·</span>
            <span className="font-semibold">
              {format(parseISO(tweet_at.toLocaleString()), 'MMM d')}
            </span>
          </span>
          <span className="text-right flex-1 flex justify-end ml-1">
            <Dots />
          </span>
        </p>
        {/* Tweet */}
        <p className="text-base">{tweet}</p>
      </div>
    </div>
  );
};

export default Tweet;

// dots
const Dots: FC = () => {
  return (
    <svg viewBox="0 0 24 24" className="w-5">
      <g>
        <circle fill="#6B7280" cx="5" cy="12" r="2"></circle>
        <circle fill="#6B7280" cx="12" cy="12" r="2"></circle>
        <circle fill="#6B7280" cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  );
};
