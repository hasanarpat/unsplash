import React from 'react';

const Logo = () => {
  return (
    <div>
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        version='1.1'
        aria-labelledby='unsplash-home'
        aria-hidden='false'
        className='w-8 h-8'
      >
        <desc lang='en-US'>Unsplash logo</desc>
        <title id='unsplash-home'>Unsplash Home</title>
        <path d='M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z'></path>
      </svg>
    </div>
  );
};

export default Logo;
