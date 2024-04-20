import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { useState } from 'react';

const SearchBar = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  return (
    <div className='w-full h-full relative'>
      <form action='' className='w-full h-full relative'>
        <input
          type='text'
          placeholder='Search images'
          className='w-full h-full rounded-full bg-accent pl-10 p-2 text-sm border-[1px] outline-none focus:border-gray-500'
          onClick={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <Button
          variant='ghost'
          className='p-0 absolute top-0 left-2 bg-transparent hover:bg-transparent'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            version='1.1'
            aria-hidden='false'
            className='fill-gray-500/50 hover:fill-gray-700'
          >
            <desc lang='en-US'>A magnifying glass</desc>
            <path d='M16.5 15c.9-1.2 1.5-2.8 1.5-4.5C18 6.4 14.6 3 10.5 3S3 6.4 3 10.5 6.4 18 10.5 18c1.7 0 3.2-.5 4.5-1.5l4.6 4.5 1.4-1.5-4.5-4.5zm-6 1c-3 0-5.5-2.5-5.5-5.5S7.5 5 10.5 5 16 7.5 16 10.5 13.5 16 10.5 16z'></path>
          </svg>
        </Button>
        <Button
          variant='ghost'
          className='p-0 absolute top-0 right-2 bg-transparent hover:bg-transparent'
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            version='1.1'
            aria-hidden='false'
            className='fill-gray-500 hover:fill-gray-700'
          >
            <desc lang='en-US'>Visual search</desc>
            <path d='M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4ZM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5Zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2Zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4ZM12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z'></path>
          </svg>
        </Button>
      </form>
      <div
        className={cn(
          'absolute hidden w-full border border-border rounded-lg top-11 bg-white p-4 z-[99]',
          showSuggestions && 'block'
        )}
      >
        <div className='w-full h-full flex flex-col'>
          <div className='flex flex-col'>
            <p className='text-sm mb-2'>Trending Searchs</p>
            <div className='flex gap-2 flex-wrap'>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  version='1.1'
                  aria-hidden='false'
                  className='fill-muted-foreground'
                >
                  <desc lang='en-US'>A trend sign</desc>
                  <path d='m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6Z'></path>
                </svg>
                orange
              </Button>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  version='1.1'
                  aria-hidden='false'
                  className='fill-muted-foreground'
                >
                  <desc lang='en-US'>A trend sign</desc>
                  <path d='m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6Z'></path>
                </svg>
                cooking
              </Button>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  version='1.1'
                  aria-hidden='false'
                  className='fill-muted-foreground'
                >
                  <desc lang='en-US'>A trend sign</desc>
                  <path d='m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6Z'></path>
                </svg>
                hiking
              </Button>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  version='1.1'
                  aria-hidden='false'
                  className='fill-muted-foreground'
                >
                  <desc lang='en-US'>A trend sign</desc>
                  <path d='m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6Z'></path>
                </svg>
                gold
              </Button>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  version='1.1'
                  aria-hidden='false'
                  className='fill-muted-foreground'
                >
                  <desc lang='en-US'>A trend sign</desc>
                  <path d='m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6Z'></path>
                </svg>
                vacation
              </Button>
            </div>
          </div>
          <div className='flex flex-col mt-4'>
            <p className='text-sm mb-2'>Trending Topics</p>
            <div className='flex gap-2 flex-wrap'>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs p-0 flex items-center gap-2 pr-2'
              >
                <div className='w-10 h-full relative'>
                  <Image
                    src='https://images.unsplash.com/photo-1707343843344-011332037abb?dpr=1&h=38&w=38&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
                    alt='suggestion'
                    fill
                  />
                </div>
                Travel
              </Button>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs p-0 flex items-center gap-2 pr-2'
              >
                <div className='w-10 h-full relative'>
                  <Image
                    src='https://images.unsplash.com/photo-1712606992721-fbb5d3b70aee?dpr=1&h=38&w=38&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
                    alt='suggestion'
                    fill
                  />
                </div>
                Health & Wellness
              </Button>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs p-0 flex items-center gap-2 pr-2'
              >
                <div className='w-10 h-full relative'>
                  <Image
                    src='https://images.unsplash.com/photo-1583000377282-fd73e23077a1?dpr=1&h=38&w=38&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
                    alt='suggestion'
                    fill
                  />
                </div>
                Film
              </Button>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs p-0 flex items-center gap-2 pr-2'
              >
                <div className='w-10 h-full relative'>
                  <Image
                    src='https://images.unsplash.com/photo-1583000377282-fd73e23077a1?dpr=1&h=38&w=38&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
                    alt='suggestion'
                    fill
                  />
                </div>
                Spritually
              </Button>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs p-0 flex items-center gap-2 pr-2'
              >
                <div className='w-10 h-full relative'>
                  <Image
                    src='https://images.unsplash.com/photo-1712606992721-fbb5d3b70aee?dpr=1&h=38&w=38&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
                    alt='suggestion'
                    fill
                  />
                </div>
                Current Events
              </Button>
            </div>
          </div>{' '}
          <div className='flex flex-col mt-4'>
            <p className='text-sm mb-2'>Trending Collections</p>
            <div className='flex gap-2 flex-wrap'>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs'
              >
                bold
              </Button>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs'
              >
                Spring in 3D
              </Button>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs'
              >
                Vegetables
              </Button>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs'
              >
                Travel
              </Button>
              <Button
                variant='ghost'
                className='text-muted-foreground border border-border text-xs'
              >
                Unsplash Designer pack Mockups
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
