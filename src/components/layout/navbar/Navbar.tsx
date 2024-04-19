'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  return (
    <nav className='h-28 border-b-2 border-border'>
      <div className='h-14 p-2.5 px-5 w-full flex items-center justify-between gap-4'>
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
        <div className='w-full h-full relative'>
          <form action='' className='w-full h-full relative'>
            <input
              type='text'
              placeholder='Search images'
              className='w-full h-full rounded-full bg-accent pl-10 p-2'
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
                className='fill-gray-500/50 hover:text-black/50'
              >
                <desc lang='en-US'>A magnifying glass</desc>
                <path d='M16.5 15c.9-1.2 1.5-2.8 1.5-4.5C18 6.4 14.6 3 10.5 3S3 6.4 3 10.5 6.4 18 10.5 18c1.7 0 3.2-.5 4.5-1.5l4.6 4.5 1.4-1.5-4.5-4.5zm-6 1c-3 0-5.5-2.5-5.5-5.5S7.5 5 10.5 5 16 7.5 16 10.5 13.5 16 10.5 16z'></path>
              </svg>
            </Button>
          </form>
          <div
            className={cn(
              'absolute hidden w-full border border-border rounded-lg top-11 bg-white p-4',
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
        <div className='max-w-sm'>
          <Popover>
            <PopoverTrigger>
              <Button variant='link' className='p-0'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  version='1.1'
                  aria-hidden='false'
                >
                  <desc lang='en-US'>navigation menu</desc>
                  <path d='M3 16h18v2H3v-2ZM3 6v2h18V6H3Zm0 7h18v-2H3v2Z'></path>
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent className='px-6 w-64'>
              <div className='w-full h-full'>
                <Accordion type='single' collapsible>
                  <AccordionItem value='item-1' className='border-none'>
                    <AccordionTrigger className='hover:no-underline text-sm font-bold'>
                      Company
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className='text-muted-foreground text-sm flex flex-col gap-2 pl-[25%]'>
                        <li>About</li>
                        <li>Advertise</li>
                        <li>History</li>
                        <li>Join the team</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>Contact us</li>
                        <li>Help Center</li>
                        <li className='flex items-center gap-2 mt-2'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>X (formerly Twitter) icon</desc>
                            <path d='M13.69 10.622 20.25 3h-1.555l-5.693 6.618L8.454 3H3.21l6.876 10.007L3.21 21h1.554l6.012-6.99L15.578 21h5.245L13.69 10.622Zm-2.126 2.474-.697-.996-5.543-7.93H7.71l4.474 6.399.697.997 5.815 8.317h-2.387l-4.745-6.787Z'></path>
                          </svg>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>Facebook icon</desc>
                            <path d='M22 12c0-5.563-4.5-10-10-10S2 6.5 2 12c0 5 3.688 9.125 8.438 9.875v-6.938H7.874V12h2.563V9.812c0-2.5 1.5-3.874 3.75-3.874 1.124 0 2.25.187 2.25.187v2.438h-1.25c-1.25 0-1.626.75-1.626 1.562V12h2.75l-.437 2.875h-2.313v7C18.313 21.187 22 17 22 12Z'></path>
                          </svg>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>Instagram icon</desc>
                            <path d='M21.933 7.877c-.048-1.064-.219-1.79-.465-2.429a4.874 4.874 0 0 0-1.154-1.77 4.959 4.959 0 0 0-1.77-1.154c-.635-.246-1.361-.417-2.429-.464C15.052 2.012 14.71 2 11.996 2c-2.714 0-3.056.012-4.123.06-1.063.047-1.79.218-2.425.464-.658.254-1.214.599-1.77 1.155a4.959 4.959 0 0 0-1.154 1.77c-.246.634-.417 1.36-.464 2.428C2.012 8.94 2 9.282 2 11.996c0 2.714.012 3.056.06 4.123.047 1.064.218 1.79.464 2.429.254.658.599 1.214 1.155 1.77a4.958 4.958 0 0 0 1.77 1.154c.634.246 1.36.417 2.428.464 1.067.048 1.405.06 4.123.06s3.056-.012 4.123-.06c1.063-.047 1.79-.218 2.429-.464a4.872 4.872 0 0 0 1.77-1.155 4.956 4.956 0 0 0 1.154-1.77c.246-.634.417-1.36.465-2.428.047-1.067.059-1.405.059-4.123s-.016-3.056-.067-4.119Zm-1.798 8.159c-.044.976-.206 1.504-.345 1.857a3.103 3.103 0 0 1-.746 1.15c-.35.35-.683.568-1.151.747-.353.135-.881.301-1.857.345-1.056.047-1.37.06-4.04.06s-2.984-.012-4.04-.06c-.976-.044-1.504-.207-1.857-.345a3.103 3.103 0 0 1-1.15-.746 3.054 3.054 0 0 1-.747-1.151c-.135-.353-.301-.881-.345-1.857-.047-1.056-.06-1.37-.06-4.04s.013-2.984.06-4.04c.044-.976.206-1.504.345-1.857.183-.468.397-.801.746-1.15.35-.35.683-.568 1.151-.747.353-.135.881-.301 1.857-.345 1.056-.047 1.37-.06 4.04-.06s2.984.013 4.04.06c.976.044 1.504.206 1.857.345.468.183.801.397 1.15.746.35.35.568.683.747 1.151.135.353.301.881.345 1.857.047 1.056.06 1.37.06 4.04s-.012 2.988-.06 4.04Zm-8.139-9.17a5.136 5.136 0 1 0 .002 10.27 5.136 5.136 0 0 0-.002-10.27Zm0 8.463a3.333 3.333 0 1 1 0-6.665 3.333 3.333 0 0 1 0 6.665Zm6.536-8.67a1.197 1.197 0 1 1-2.397 0 1.197 1.197 0 1 1 2.397 0Z'></path>
                          </svg>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-2' className='border-none'>
                    <AccordionTrigger className='hover:no-underline text-sm font-bold'>
                      Product
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className='text-muted-foreground text-sm flex flex-col gap-2 pl-[25%]'>
                        <li>About</li>
                        <li>Advertise</li>
                        <li>History</li>
                        <li>Join the team</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>Contact us</li>
                        <li>Help Center</li>
                        <li className='flex items-center gap-2 mt-2'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>X (formerly Twitter) icon</desc>
                            <path d='M13.69 10.622 20.25 3h-1.555l-5.693 6.618L8.454 3H3.21l6.876 10.007L3.21 21h1.554l6.012-6.99L15.578 21h5.245L13.69 10.622Zm-2.126 2.474-.697-.996-5.543-7.93H7.71l4.474 6.399.697.997 5.815 8.317h-2.387l-4.745-6.787Z'></path>
                          </svg>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>Facebook icon</desc>
                            <path d='M22 12c0-5.563-4.5-10-10-10S2 6.5 2 12c0 5 3.688 9.125 8.438 9.875v-6.938H7.874V12h2.563V9.812c0-2.5 1.5-3.874 3.75-3.874 1.124 0 2.25.187 2.25.187v2.438h-1.25c-1.25 0-1.626.75-1.626 1.562V12h2.75l-.437 2.875h-2.313v7C18.313 21.187 22 17 22 12Z'></path>
                          </svg>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>Instagram icon</desc>
                            <path d='M21.933 7.877c-.048-1.064-.219-1.79-.465-2.429a4.874 4.874 0 0 0-1.154-1.77 4.959 4.959 0 0 0-1.77-1.154c-.635-.246-1.361-.417-2.429-.464C15.052 2.012 14.71 2 11.996 2c-2.714 0-3.056.012-4.123.06-1.063.047-1.79.218-2.425.464-.658.254-1.214.599-1.77 1.155a4.959 4.959 0 0 0-1.154 1.77c-.246.634-.417 1.36-.464 2.428C2.012 8.94 2 9.282 2 11.996c0 2.714.012 3.056.06 4.123.047 1.064.218 1.79.464 2.429.254.658.599 1.214 1.155 1.77a4.958 4.958 0 0 0 1.77 1.154c.634.246 1.36.417 2.428.464 1.067.048 1.405.06 4.123.06s3.056-.012 4.123-.06c1.063-.047 1.79-.218 2.429-.464a4.872 4.872 0 0 0 1.77-1.155 4.956 4.956 0 0 0 1.154-1.77c.246-.634.417-1.36.465-2.428.047-1.067.059-1.405.059-4.123s-.016-3.056-.067-4.119Zm-1.798 8.159c-.044.976-.206 1.504-.345 1.857a3.103 3.103 0 0 1-.746 1.15c-.35.35-.683.568-1.151.747-.353.135-.881.301-1.857.345-1.056.047-1.37.06-4.04.06s-2.984-.012-4.04-.06c-.976-.044-1.504-.207-1.857-.345a3.103 3.103 0 0 1-1.15-.746 3.054 3.054 0 0 1-.747-1.151c-.135-.353-.301-.881-.345-1.857-.047-1.056-.06-1.37-.06-4.04s.013-2.984.06-4.04c.044-.976.206-1.504.345-1.857.183-.468.397-.801.746-1.15.35-.35.683-.568 1.151-.747.353-.135.881-.301 1.857-.345 1.056-.047 1.37-.06 4.04-.06s2.984.013 4.04.06c.976.044 1.504.206 1.857.345.468.183.801.397 1.15.746.35.35.568.683.747 1.151.135.353.301.881.345 1.857.047 1.056.06 1.37.06 4.04s-.012 2.988-.06 4.04Zm-8.139-9.17a5.136 5.136 0 1 0 .002 10.27 5.136 5.136 0 0 0-.002-10.27Zm0 8.463a3.333 3.333 0 1 1 0-6.665 3.333 3.333 0 0 1 0 6.665Zm6.536-8.67a1.197 1.197 0 1 1-2.397 0 1.197 1.197 0 1 1 2.397 0Z'></path>
                          </svg>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-3' className='border-none'>
                    <AccordionTrigger className='hover:no-underline text-sm font-bold'>
                      Community
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className='text-muted-foreground text-sm flex flex-col gap-2 pl-[25%]'>
                        <li>About</li>
                        <li>Advertise</li>
                        <li>History</li>
                        <li>Join the team</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>Contact us</li>
                        <li>Help Center</li>
                        <li className='flex items-center gap-2 mt-2'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>X (formerly Twitter) icon</desc>
                            <path d='M13.69 10.622 20.25 3h-1.555l-5.693 6.618L8.454 3H3.21l6.876 10.007L3.21 21h1.554l6.012-6.99L15.578 21h5.245L13.69 10.622Zm-2.126 2.474-.697-.996-5.543-7.93H7.71l4.474 6.399.697.997 5.815 8.317h-2.387l-4.745-6.787Z'></path>
                          </svg>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>Facebook icon</desc>
                            <path d='M22 12c0-5.563-4.5-10-10-10S2 6.5 2 12c0 5 3.688 9.125 8.438 9.875v-6.938H7.874V12h2.563V9.812c0-2.5 1.5-3.874 3.75-3.874 1.124 0 2.25.187 2.25.187v2.438h-1.25c-1.25 0-1.626.75-1.626 1.562V12h2.75l-.437 2.875h-2.313v7C18.313 21.187 22 17 22 12Z'></path>
                          </svg>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>Instagram icon</desc>
                            <path d='M21.933 7.877c-.048-1.064-.219-1.79-.465-2.429a4.874 4.874 0 0 0-1.154-1.77 4.959 4.959 0 0 0-1.77-1.154c-.635-.246-1.361-.417-2.429-.464C15.052 2.012 14.71 2 11.996 2c-2.714 0-3.056.012-4.123.06-1.063.047-1.79.218-2.425.464-.658.254-1.214.599-1.77 1.155a4.959 4.959 0 0 0-1.154 1.77c-.246.634-.417 1.36-.464 2.428C2.012 8.94 2 9.282 2 11.996c0 2.714.012 3.056.06 4.123.047 1.064.218 1.79.464 2.429.254.658.599 1.214 1.155 1.77a4.958 4.958 0 0 0 1.77 1.154c.634.246 1.36.417 2.428.464 1.067.048 1.405.06 4.123.06s3.056-.012 4.123-.06c1.063-.047 1.79-.218 2.429-.464a4.872 4.872 0 0 0 1.77-1.155 4.956 4.956 0 0 0 1.154-1.77c.246-.634.417-1.36.465-2.428.047-1.067.059-1.405.059-4.123s-.016-3.056-.067-4.119Zm-1.798 8.159c-.044.976-.206 1.504-.345 1.857a3.103 3.103 0 0 1-.746 1.15c-.35.35-.683.568-1.151.747-.353.135-.881.301-1.857.345-1.056.047-1.37.06-4.04.06s-2.984-.012-4.04-.06c-.976-.044-1.504-.207-1.857-.345a3.103 3.103 0 0 1-1.15-.746 3.054 3.054 0 0 1-.747-1.151c-.135-.353-.301-.881-.345-1.857-.047-1.056-.06-1.37-.06-4.04s.013-2.984.06-4.04c.044-.976.206-1.504.345-1.857.183-.468.397-.801.746-1.15.35-.35.683-.568 1.151-.747.353-.135.881-.301 1.857-.345 1.056-.047 1.37-.06 4.04-.06s2.984.013 4.04.06c.976.044 1.504.206 1.857.345.468.183.801.397 1.15.746.35.35.568.683.747 1.151.135.353.301.881.345 1.857.047 1.056.06 1.37.06 4.04s-.012 2.988-.06 4.04Zm-8.139-9.17a5.136 5.136 0 1 0 .002 10.27 5.136 5.136 0 0 0-.002-10.27Zm0 8.463a3.333 3.333 0 1 1 0-6.665 3.333 3.333 0 0 1 0 6.665Zm6.536-8.67a1.197 1.197 0 1 1-2.397 0 1.197 1.197 0 1 1 2.397 0Z'></path>
                          </svg>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-4' className='border-none'>
                    <AccordionTrigger className='hover:no-underline text-sm font-bold'>
                      Explore
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className='text-muted-foreground text-sm flex flex-col gap-2 pl-[25%]'>
                        <li>About</li>
                        <li>Advertise</li>
                        <li>History</li>
                        <li>Join the team</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>Contact us</li>
                        <li>Help Center</li>
                        <li className='flex items-center gap-2 mt-2'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>X (formerly Twitter) icon</desc>
                            <path d='M13.69 10.622 20.25 3h-1.555l-5.693 6.618L8.454 3H3.21l6.876 10.007L3.21 21h1.554l6.012-6.99L15.578 21h5.245L13.69 10.622Zm-2.126 2.474-.697-.996-5.543-7.93H7.71l4.474 6.399.697.997 5.815 8.317h-2.387l-4.745-6.787Z'></path>
                          </svg>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>Facebook icon</desc>
                            <path d='M22 12c0-5.563-4.5-10-10-10S2 6.5 2 12c0 5 3.688 9.125 8.438 9.875v-6.938H7.874V12h2.563V9.812c0-2.5 1.5-3.874 3.75-3.874 1.124 0 2.25.187 2.25.187v2.438h-1.25c-1.25 0-1.626.75-1.626 1.562V12h2.75l-.437 2.875h-2.313v7C18.313 21.187 22 17 22 12Z'></path>
                          </svg>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>Instagram icon</desc>
                            <path d='M21.933 7.877c-.048-1.064-.219-1.79-.465-2.429a4.874 4.874 0 0 0-1.154-1.77 4.959 4.959 0 0 0-1.77-1.154c-.635-.246-1.361-.417-2.429-.464C15.052 2.012 14.71 2 11.996 2c-2.714 0-3.056.012-4.123.06-1.063.047-1.79.218-2.425.464-.658.254-1.214.599-1.77 1.155a4.959 4.959 0 0 0-1.154 1.77c-.246.634-.417 1.36-.464 2.428C2.012 8.94 2 9.282 2 11.996c0 2.714.012 3.056.06 4.123.047 1.064.218 1.79.464 2.429.254.658.599 1.214 1.155 1.77a4.958 4.958 0 0 0 1.77 1.154c.634.246 1.36.417 2.428.464 1.067.048 1.405.06 4.123.06s3.056-.012 4.123-.06c1.063-.047 1.79-.218 2.429-.464a4.872 4.872 0 0 0 1.77-1.155 4.956 4.956 0 0 0 1.154-1.77c.246-.634.417-1.36.465-2.428.047-1.067.059-1.405.059-4.123s-.016-3.056-.067-4.119Zm-1.798 8.159c-.044.976-.206 1.504-.345 1.857a3.103 3.103 0 0 1-.746 1.15c-.35.35-.683.568-1.151.747-.353.135-.881.301-1.857.345-1.056.047-1.37.06-4.04.06s-2.984-.012-4.04-.06c-.976-.044-1.504-.207-1.857-.345a3.103 3.103 0 0 1-1.15-.746 3.054 3.054 0 0 1-.747-1.151c-.135-.353-.301-.881-.345-1.857-.047-1.056-.06-1.37-.06-4.04s.013-2.984.06-4.04c.044-.976.206-1.504.345-1.857.183-.468.397-.801.746-1.15.35-.35.683-.568 1.151-.747.353-.135.881-.301 1.857-.345 1.056-.047 1.37-.06 4.04-.06s2.984.013 4.04.06c.976.044 1.504.206 1.857.345.468.183.801.397 1.15.746.35.35.568.683.747 1.151.135.353.301.881.345 1.857.047 1.056.06 1.37.06 4.04s-.012 2.988-.06 4.04Zm-8.139-9.17a5.136 5.136 0 1 0 .002 10.27 5.136 5.136 0 0 0-.002-10.27Zm0 8.463a3.333 3.333 0 1 1 0-6.665 3.333 3.333 0 0 1 0 6.665Zm6.536-8.67a1.197 1.197 0 1 1-2.397 0 1.197 1.197 0 1 1 2.397 0Z'></path>
                          </svg>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-5' className='border-none'>
                    <AccordionTrigger className='hover:no-underline text-sm font-bold'>
                      Legal
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className='text-muted-foreground text-sm flex flex-col gap-2 pl-[25%]'>
                        <li>About</li>
                        <li>Advertise</li>
                        <li>History</li>
                        <li>Join the team</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>Contact us</li>
                        <li>Help Center</li>
                        <li className='flex items-center gap-2 mt-2'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>X (formerly Twitter) icon</desc>
                            <path d='M13.69 10.622 20.25 3h-1.555l-5.693 6.618L8.454 3H3.21l6.876 10.007L3.21 21h1.554l6.012-6.99L15.578 21h5.245L13.69 10.622Zm-2.126 2.474-.697-.996-5.543-7.93H7.71l4.474 6.399.697.997 5.815 8.317h-2.387l-4.745-6.787Z'></path>
                          </svg>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>Facebook icon</desc>
                            <path d='M22 12c0-5.563-4.5-10-10-10S2 6.5 2 12c0 5 3.688 9.125 8.438 9.875v-6.938H7.874V12h2.563V9.812c0-2.5 1.5-3.874 3.75-3.874 1.124 0 2.25.187 2.25.187v2.438h-1.25c-1.25 0-1.626.75-1.626 1.562V12h2.75l-.437 2.875h-2.313v7C18.313 21.187 22 17 22 12Z'></path>
                          </svg>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>Instagram icon</desc>
                            <path d='M21.933 7.877c-.048-1.064-.219-1.79-.465-2.429a4.874 4.874 0 0 0-1.154-1.77 4.959 4.959 0 0 0-1.77-1.154c-.635-.246-1.361-.417-2.429-.464C15.052 2.012 14.71 2 11.996 2c-2.714 0-3.056.012-4.123.06-1.063.047-1.79.218-2.425.464-.658.254-1.214.599-1.77 1.155a4.959 4.959 0 0 0-1.154 1.77c-.246.634-.417 1.36-.464 2.428C2.012 8.94 2 9.282 2 11.996c0 2.714.012 3.056.06 4.123.047 1.064.218 1.79.464 2.429.254.658.599 1.214 1.155 1.77a4.958 4.958 0 0 0 1.77 1.154c.634.246 1.36.417 2.428.464 1.067.048 1.405.06 4.123.06s3.056-.012 4.123-.06c1.063-.047 1.79-.218 2.429-.464a4.872 4.872 0 0 0 1.77-1.155 4.956 4.956 0 0 0 1.154-1.77c.246-.634.417-1.36.465-2.428.047-1.067.059-1.405.059-4.123s-.016-3.056-.067-4.119Zm-1.798 8.159c-.044.976-.206 1.504-.345 1.857a3.103 3.103 0 0 1-.746 1.15c-.35.35-.683.568-1.151.747-.353.135-.881.301-1.857.345-1.056.047-1.37.06-4.04.06s-2.984-.012-4.04-.06c-.976-.044-1.504-.207-1.857-.345a3.103 3.103 0 0 1-1.15-.746 3.054 3.054 0 0 1-.747-1.151c-.135-.353-.301-.881-.345-1.857-.047-1.056-.06-1.37-.06-4.04s.013-2.984.06-4.04c.044-.976.206-1.504.345-1.857.183-.468.397-.801.746-1.15.35-.35.683-.568 1.151-.747.353-.135.881-.301 1.857-.345 1.056-.047 1.37-.06 4.04-.06s2.984.013 4.04.06c.976.044 1.504.206 1.857.345.468.183.801.397 1.15.746.35.35.568.683.747 1.151.135.353.301.881.345 1.857.047 1.056.06 1.37.06 4.04s-.012 2.988-.06 4.04Zm-8.139-9.17a5.136 5.136 0 1 0 .002 10.27 5.136 5.136 0 0 0-.002-10.27Zm0 8.463a3.333 3.333 0 1 1 0-6.665 3.333 3.333 0 0 1 0 6.665Zm6.536-8.67a1.197 1.197 0 1 1-2.397 0 1.197 1.197 0 1 1 2.397 0Z'></path>
                          </svg>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-6' className='border-none'>
                    <AccordionTrigger className='hover:no-underline text-sm font-bold'>
                      English
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className='text-muted-foreground text-sm flex flex-col gap-2 pl-[25%]'>
                        <li>About</li>
                        <li>Advertise</li>
                        <li>History</li>
                        <li>Join the team</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>Contact us</li>
                        <li>Help Center</li>
                        <li className='flex items-center gap-2 mt-2'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>X (formerly Twitter) icon</desc>
                            <path d='M13.69 10.622 20.25 3h-1.555l-5.693 6.618L8.454 3H3.21l6.876 10.007L3.21 21h1.554l6.012-6.99L15.578 21h5.245L13.69 10.622Zm-2.126 2.474-.697-.996-5.543-7.93H7.71l4.474 6.399.697.997 5.815 8.317h-2.387l-4.745-6.787Z'></path>
                          </svg>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>Facebook icon</desc>
                            <path d='M22 12c0-5.563-4.5-10-10-10S2 6.5 2 12c0 5 3.688 9.125 8.438 9.875v-6.938H7.874V12h2.563V9.812c0-2.5 1.5-3.874 3.75-3.874 1.124 0 2.25.187 2.25.187v2.438h-1.25c-1.25 0-1.626.75-1.626 1.562V12h2.75l-.437 2.875h-2.313v7C18.313 21.187 22 17 22 12Z'></path>
                          </svg>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            version='1.1'
                            aria-hidden='false'
                            className='fill-gray-400 w-5 h-5'
                          >
                            <desc lang='en-US'>Instagram icon</desc>
                            <path d='M21.933 7.877c-.048-1.064-.219-1.79-.465-2.429a4.874 4.874 0 0 0-1.154-1.77 4.959 4.959 0 0 0-1.77-1.154c-.635-.246-1.361-.417-2.429-.464C15.052 2.012 14.71 2 11.996 2c-2.714 0-3.056.012-4.123.06-1.063.047-1.79.218-2.425.464-.658.254-1.214.599-1.77 1.155a4.959 4.959 0 0 0-1.154 1.77c-.246.634-.417 1.36-.464 2.428C2.012 8.94 2 9.282 2 11.996c0 2.714.012 3.056.06 4.123.047 1.064.218 1.79.464 2.429.254.658.599 1.214 1.155 1.77a4.958 4.958 0 0 0 1.77 1.154c.634.246 1.36.417 2.428.464 1.067.048 1.405.06 4.123.06s3.056-.012 4.123-.06c1.063-.047 1.79-.218 2.429-.464a4.872 4.872 0 0 0 1.77-1.155 4.956 4.956 0 0 0 1.154-1.77c.246-.634.417-1.36.465-2.428.047-1.067.059-1.405.059-4.123s-.016-3.056-.067-4.119Zm-1.798 8.159c-.044.976-.206 1.504-.345 1.857a3.103 3.103 0 0 1-.746 1.15c-.35.35-.683.568-1.151.747-.353.135-.881.301-1.857.345-1.056.047-1.37.06-4.04.06s-2.984-.012-4.04-.06c-.976-.044-1.504-.207-1.857-.345a3.103 3.103 0 0 1-1.15-.746 3.054 3.054 0 0 1-.747-1.151c-.135-.353-.301-.881-.345-1.857-.047-1.056-.06-1.37-.06-4.04s.013-2.984.06-4.04c.044-.976.206-1.504.345-1.857.183-.468.397-.801.746-1.15.35-.35.683-.568 1.151-.747.353-.135.881-.301 1.857-.345 1.056-.047 1.37-.06 4.04-.06s2.984.013 4.04.06c.976.044 1.504.206 1.857.345.468.183.801.397 1.15.746.35.35.568.683.747 1.151.135.353.301.881.345 1.857.047 1.056.06 1.37.06 4.04s-.012 2.988-.06 4.04Zm-8.139-9.17a5.136 5.136 0 1 0 .002 10.27 5.136 5.136 0 0 0-.002-10.27Zm0 8.463a3.333 3.333 0 1 1 0-6.665 3.333 3.333 0 0 1 0 6.665Zm6.536-8.67a1.197 1.197 0 1 1-2.397 0 1.197 1.197 0 1 1 2.397 0Z'></path>
                          </svg>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className='h-14 p-2.5 px-5 pb-0'>
        <div className='w-full h-full'>
          <ul className='w-full h-full flex items-center gap-4'>
            <li className='p-1 text-sm font-light border-b-2 border-black h-full flex items-start justify-center'>
              <Link href='/'>Editorial</Link>
            </li>
            <li className='p-1 text-sm text-muted-foreground font-light h-full flex items-start justify-center'>
              <Link href='/'>Unsplash+</Link>
            </li>
            <Separator orientation='vertical' className='h-8 w-[1.3px]' />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
