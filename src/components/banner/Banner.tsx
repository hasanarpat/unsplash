import Image from 'next/image';
import { Button } from '../ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import SearchBar from '../layout/navbar/searchBar/SearchBar';
import Link from 'next/link';
import { trendingSearches } from '@/lib/constants';

const Banner = () => {
  return (
    <div className='w-full'>
      <div className='w-full md:hidden'>
        <h3 className='text-xl font-bold p-4 pb-0 mt-4'>Unsplash</h3>
        <div className='p-4 w-full'>
          <Carousel className='w-full group'>
            <CarouselContent className='items-strecth'>
              <CarouselItem className='border border-border rounded-lg flex flex-col gap-4 basis-[90%] ml-4'>
                <div className='w-full flex items-center justify-between p-4 pb-0'>
                  <h4 className='font-semibold text-sm'>Collections</h4>
                  <span className='text-sm text-muted-foreground'>See all</span>
                </div>
                <div className='flex flex-col gap-2 p-4 pt-0'>
                  <div className='flex items-center'>
                    <Image
                      src='https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
                      alt=''
                      className='object-cover rounded'
                      width={36}
                      height={36}
                    />
                    <div className='flex flex-col text-[11px] ml-2'>
                      <p className='text-sm font-semibold'>Travel</p>
                      <p className='text-muted-foreground'>by Lauren Hopkins</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <Image
                      src='https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
                      alt=''
                      className='object-cover rounded'
                      width={36}
                      height={36}
                    />
                    <div className='flex flex-col text-[11px] ml-2'>
                      <p className='text-sm font-semibold'>
                        unsplash Designer Pack Mockups
                      </p>
                      <p className='text-muted-foreground'>
                        by Unsplash+ Collections
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='border border-border rounded-lg flex flex-col gap-4 basis-[90%] ml-4'>
                <div className='h-full flex flex-col justify-between'>
                  <div className='w-full p-2 flex gap-2 flex-wrap pl-0'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='text-muted-foreground border border-border text-xs'
                    >
                      orange
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='text-muted-foreground border border-border text-xs'
                    >
                      cooking
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='text-muted-foreground border border-border text-xs'
                    >
                      hiking
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='text-muted-foreground border border-border text-xs'
                    >
                      gold
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='text-muted-foreground border border-border text-xs'
                    >
                      vacation
                    </Button>
                  </div>
                  <div className='flex items-center p-2 pt-0'>
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
                    <Button variant='link'>See trending searhces</Button>
                  </div>
                </div>
              </CarouselItem>{' '}
              <CarouselItem className='border border-border rounded-lg basis-[90%] ml-4 p-0'>
                <div className='h-full w-full flex flex-col justify-between relative'>
                  <Image
                    src='https://images.unsplash.com/photo-1713559650613-eae7b74543d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
                    alt=''
                    fill
                    className='rounded-lg object-cover'
                  />
                  <div className='w-[40%] absolute bottom-0 left-0 p-4 text-white font-light'>
                    <p className='text-[11px]'>Discover Unsplash+</p>
                    <p className='font-semibold text-xs'>
                      Unlimited Downloads.
                      <br /> Full legal protections.
                      <br /> No ads.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='hidden group-hover:disabled:hidden group-hover:block top-1/2 left-0 disabled:hidden border-none bg-white/50 hover:bg-inherit backdrop-blur-2xl backdrop-opacity-75' />
            <CarouselNext className='hidden group-hover:disabled:hidden group-hover:block top-1/2 left-[calc(100%-2rem)] disabled:hidden border-none bg-white/50 hover:bg-inherit backdrop-blur-2xl backdrop-opacity-75' />
          </Carousel>
        </div>
        <Button variant='secondary' size='sm' className='text-xs ml-4 mb-4'>
          Supported by{' '}
          <span className='uppercase font-bold text-xs ml-2'>squarespace</span>
        </Button>
      </div>
      <div className='hidden md:block w-full'>
        <div className='xl:max-w-screen-2xl p-4 mx-auto flex gap-8 items-end'>
          <div className='w-[60%] lg:w-[50%] flex flex-col justify-end gap-4'>
            <h3 className='text-4xl font-bold pb-0 mt-4'>Unsplash</h3>
            <div className='w-full flex items-end flex-wrap gap-2'>
              {' '}
              <p className='text-md font-medium max-w-[55%]'>
                The internet&apos;s source for visuals. Powered by creators
                everywhere.
              </p>
              <Button variant='secondary' size='sm' className='text-xs'>
                Supported by{' '}
                <span className='uppercase font-bold text-xs ml-2'>
                  squarespace
                </span>
              </Button>
            </div>
            <SearchBar />
          </div>
          <div className='w-[40%] lg:w-[50%] flex justify-end pt-6'>
            <div className='w-max flex gap-6'>
              <div className='w-72 h-72 border border-border rounded-lg flex flex-col justify-between'>
                <div className='flex flex-wrap gap-2 p-4'>
                  {trendingSearches.map((item, i) => (
                    <Button
                      size='sm'
                      variant='outline'
                      key={i}
                      className=' font-light'
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </Button>
                  ))}
                </div>
                <span className='underline p-4 flex items-center gap-2 text-sm'>
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
                  See trending searches
                </span>
              </div>
              <div className='hidden lg:block w-72 h-72 relative rounded-lg border border-border'>
                <Image
                  alt=''
                  src='https://images.unsplash.com/photo-1713972085027-706e345e7215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8'
                  fill
                  className='object-cover rounded-lg hue-rotate-15'
                />
                <div className='flex flex-col absolute z-10 text-white font-medium bottom-4 left-4'>
                  <span className='text-xs'>Featured</span>
                  <span>Moritz Lange</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
