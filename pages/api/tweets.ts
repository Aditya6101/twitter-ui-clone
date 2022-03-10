import type { NextApiRequest, NextApiResponse } from 'next';
import {
  randUser,
  randPhrase,
  randRecentDate,
  randNumber,
} from '@ngneat/falso';

type Tweet = {
  id: string;
  username: string;
  profile_pic: string;
  name: string;
  tweet_at: Date;
  tweet: string;
  replies: number;
  rts: number;
  likes: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const tweetsLimit = req.query.limit ? +req.query.limit : 20;

  const tweets: Tweet[] = [];

  for (let i = 0; i < tweetsLimit; i++) {
    const tweet: Tweet = {
      id: randUser().id,
      username: randUser().username,
      profile_pic: randUser().img,
      name: `${randUser().firstName} ${randUser().lastName}`,
      tweet_at: randRecentDate(),
      tweet: randPhrase(),
      replies: +(randNumber() / 10000).toFixed(0),
      rts: +(randNumber() / 1000).toFixed(0),
      likes: +(randNumber() / 100).toFixed(0),
    };
    tweets.push(tweet);
  }

  res.status(200).json(tweets);
}
