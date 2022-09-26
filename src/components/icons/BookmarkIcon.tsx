import type { FC } from 'react';
import React from 'react';

const BookmarkIcon: FC<{ className?: string; size?: number | string }> = ({
  size = '1em',
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.07 2H8.9C6.2 2 4 3.07 4 5.79V20.97C4 21.53 4.45 21.99 5.01 21.99C5.18 21.99 5.351 21.939 5.5 21.86L11.99 18.62L18.47 21.86C18.71 22 19 22.04 19.26 21.96C19.53 21.88 19.75 21.7 19.88 21.46C19.96 21.31 20 21.14 20 20.97V5.79C19.97 3.07 17.78 2 15.07 2Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BookmarkIcon;
