'use client';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import SearchBar from './searchBar/SearchBar';
import Logo from '@/components/shared/logo/Logo';
import NavSlider from './navSlider/NavSlider';
import Menu from './menu/Menu';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className='h-28 border-b-2 border-border sticky top-0 bg-background'>
      <div className='h-14 p-2.5 px-5 w-full flex items-center justify-between gap-4'>
        <Logo />
        <SearchBar />
        <div className='hidden lg:block ml-2'>
          <div className='h-full flex items-center gap-2 text-sm font-light text-gray-600'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>Explore</TooltipTrigger>
                <TooltipContent>
                  <div className='flex flex-col'>
                    <Link href='/' className='my-1'>
                      Images
                    </Link>
                    <Link href='/' className='my-1'>
                      Backgrounds
                    </Link>
                    <Link href='/' className='my-1'>
                      Wallpapers
                    </Link>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Link href='/advertise'>Advertise</Link>
            <Link href='/advertise' className='text-black font-normal'>
              Unsplash+
            </Link>
          </div>
        </div>
        <Separator orientation='vertical' className='hidden lg:block' />
        <div className='hidden sm:block h-full'>
          <div className='h-full flex items-center gap-2'>
            <Button variant='link' className='p-0 border-none font-extralight'>
              Log in
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='text-xs font-light h-8'
            >
              Submit a photo
            </Button>
          </div>
        </div>
        <Menu />
      </div>
      <div className='h-14 p-2.5 px-5 pb-0'>
        <div className='w-full h-full flex items-center'>
          <ul className='h-full flex items-center gap-4'>
            <li className='text-sm font-light h-full flex items-start justify-center'>
              <Link
                href='/'
                className={cn(
                  'h-full border-b-2 p-1',
                  pathname === '/' && 'border-black'
                )}
              >
                Editorial
              </Link>
            </li>
            <li className='text-sm font-light h-full flex items-start justify-center'>
              <Link
                href='/'
                className={cn(
                  'h-full border-b-2 p-1',
                  pathname === '/plus' && 'border-black'
                )}
              >
                Unsplash+
              </Link>
            </li>
          </ul>
          <Separator orientation='vertical' className='h-8 mx-6' />
          <NavSlider />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
