import Image from 'next/image';
import GalleryImg from '../galleryImg/GalleryImg';

const Gallery = () => {
  return (
    <div className='w-full p-4'>
      <div className='mt-4'>
        <div className='w-full columns-3 inline-block mx-auto'>
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
          <GalleryImg />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
