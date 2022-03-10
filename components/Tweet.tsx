import { FC } from 'react';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import IconBar from './IconBar';
import Dots from './icons/Dots';

type Props = {
  tweet: Tweet;
};

const Tweet: FC<Props> = ({ tweet }) => {
  return (
    <article className="flex items-start px-4 py-3 border-b border-gray-200">
      {/* Avatar */}
      <Image
        src={tweet.avatar}
        alt="profile_pic"
        height={40}
        width={40}
        className="rounded-full"
      />

      {/* Tweet body */}
      <div className="flex flex-col flex-1 min-w-0 ml-3">
        {/* Tweet header */}
        <p className="flex text-sm">
          <span className="truncate">
            <span className="font-bold text-black">{tweet.username}</span>{' '}
            <span className="pl-1 font-semibold text-gray-500">
              @{tweet.userId}
            </span>
          </span>
          <span className="flex-shrink-0 text-gray-500">
            <span className="px-1 font-bold">·</span>
            <span className="font-semibold">
              {format(parseISO(tweet.date.toLocaleString()), 'MMM d')}
            </span>
          </span>
          <span className="flex justify-end flex-1 ml-1 text-right">
            <Dots className="w-5 h-5" />
          </span>
        </p>

        {/* Tweet text */}
        <p className="text-base">{tweet.text}</p>

        {/* Tweet icon bar */}
        <IconBar replies={tweet.replies} rts={tweet.rts} likes={tweet.likes} />
      </div>
    </article>
  );
};

export default Tweet;
