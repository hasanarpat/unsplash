import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const listItems = [
  {
    title: 'Black & White',
    href: '/black&white',
  },
  {
    title: 'Wallpapers',
    href: '/wallpapers',
  },
  {
    title: 'Nature',
    href: '/nature',
  },
  {
    title: '3D Renders',
    href: '/black&white',
  },
  {
    title: 'Travel',
    href: '/Film',
  },
  {
    title: 'Architecture & Interious',
    href: '/nature',
  },
  {
    title: 'Street Photography',
    href: '/black&white',
  },
  {
    title: 'Film',
    href: '/Film',
  },
  {
    title: 'Archival',
    href: '/nature',
  },
  {
    title: 'Experimental',
    href: '/Film',
  },
  {
    title: 'Animals',
    href: '/Film',
  },
  {
    title: 'Fashion & Beauty',
    href: '/Film',
  },
  {
    title: 'People',
    href: '/Film',
  },
  {
    title: 'Film',
    href: '/Film',
  },
  {
    title: 'Archival',
    href: '/Film',
  },
  {
    title: 'Experimental',
    href: '/Film',
  },
  {
    title: 'Animals',
    href: '/Film',
  },
  {
    title: 'Fashion & Beauty',
    href: '/Film',
  },
  {
    title: 'People',
    href: '/Film',
  },
  {
    title: 'Film',
    href: '/Film',
  },
  {
    title: 'Archival',
    href: '/Film',
  },
  {
    title: 'Experimental',
    href: '/Film',
  },
  {
    title: 'Animals',
    href: '/Film',
  },
  {
    title: 'Fashion & Beauty',
    href: '/Film',
  },
  {
    title: 'People',
    href: '/Film',
  },
];

const NavSlider = () => {
  const pathName = usePathname();

  return (
    <div className='w-full h-full flex items-center overflow-hidden'>
      <Carousel className='h-full w-full'>
        <CarouselContent className='h-11 items-start pt-2'>
          {listItems.map((item, i) => (
            <CarouselItem
              key={i}
              className='text-muted-foreground text-xs max-w-max h-9'
            >
              <Link
                href={item.href}
                className={cn(
                  'border-b-2 border-transparent h-full flex',
                  item.href === pathName && 'border-black'
                )}
              >
                {item.title}
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='top-1/3 left-0 disabled:hidden border-none bg-white/50 hover:bg-inherit backdrop-blur-2xl backdrop-opacity-75' />
        <CarouselNext className='top-1/3 left-[calc(100%-2rem)] disabled:hidden border-none bg-white/50 hover:bg-inherit backdrop-blur-2xl backdrop-opacity-75' />
      </Carousel>
    </div>
  );
};

export default NavSlider;
