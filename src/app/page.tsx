import Banner from '@/components/banner/Banner';
import Gallery from '@/components/layout/img/gallery/Gallery';

export default function Home() {
  return (
    <main className='w-full max-w-screen-xl mx-auto'>
      <Banner />
      <Gallery />
    </main>
  );
}
