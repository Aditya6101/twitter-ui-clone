import React from 'react';
import Like from './icons/Like';
import Options from './icons/Options';
import Reply from './icons/Reply';
import RT from './icons/RT';

const IconBar = () => {
  return (
    <div className="flex items-center mt-3 justify-between">
      <Reply className="h-5 w-5 text-gray-500" />
      <RT className="h-5 w-5 text-gray-500" />
      <Like className="h-5 w-5 text-gray-500" />
      <Options className="h-5 w-5 text-gray-500" />
    </div>
  );
};

export default IconBar;
