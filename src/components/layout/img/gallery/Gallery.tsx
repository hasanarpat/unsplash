import Image from 'next/image';

const Gallery = () => {
  return (
    <div className='w-full p-4'>
      <div className='mt-4'>
        <div className='w-full flex'>
          <div className='gallery-image-container'>
            <Image
              alt=''
              src='https://images.unsplash.com/photo-1713972085027-706e345e7215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8'
              fill
              className='gallery-image'
            />
          </div>
          <div className='gallery-image-container'>
            <Image
              alt=''
              src='https://images.unsplash.com/photo-1713972085027-706e345e7215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8'
              fill
              className='gallery-image'
            />
          </div>
          <div className='gallery-image-container'>
            <Image
              alt=''
              src='https://images.unsplash.com/photo-1713972085027-706e345e7215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8'
              fill
              className='gallery-image'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
