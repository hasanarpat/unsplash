import { Button } from '@/components/ui/button';
import { ArrowDown, Heart, Plus, Verified } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const GalleryImg = () => {
  return (
    <div className='gallery-image-container mb-5 relative group'>
      <Image
        alt=''
        src='https://images.unsplash.com/photo-1713972085027-706e345e7215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8'
        fill
        className='gallery-image'
      />
      <div
        id='layer'
        className='w-full h-full top-0 hidden group-hover:block bg-black/30 transition-all duration-500 ease-linear shadow-inner'
      >
        <div className='w-full h-full flex flex-col justify-between'>
          <div className='w-full flex justify-end p-3'>
            <div className='flex gap-2 items-center'>
              <Button size='icon' variant='outline'>
                <Heart className='fill-gray-500 stroke-gray-500 hover:fill-black transition-colors duration-300 ease-linear' />
              </Button>
              <Button size='icon' variant='outline'>
                <Plus className='fill-gray-500 stroke-gray-500 hover:fill-black transition-colors duration-300 ease-linear' />
              </Button>
            </div>
          </div>
          <div className='w-full p-3'>
            <div className='flex gap-2 items-center justify-between'>
              <div className='flex items-center gap-1 w-full'>
                <Link href='/' className='h-10 w-10 rounded-full relative'>
                  <Image
                    alt=''
                    src='https://images.unsplash.com/photo-1713972085027-706e345e7215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8'
                    fill
                    className='object-cover rounded-full'
                  />
                </Link>
                <div className='flex flex-col items-start justify-center text-white text-sm font-medium'>
                  <Link href='/'>Jane Doe</Link>
                  <Link
                    href='/'
                    className='flex items-center gap-1 text-xs text-gray-300/70 hover:text-white'
                  >
                    Avaliable for hire <Verified className='h-5 w-5' />
                  </Link>
                </div>
              </div>
              <div>
                <Button size='icon' variant='outline'>
                  <ArrowDown className='stroke-gray-500 hover:stroke-black transition-colors duration-300 ease-linear' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImg;
