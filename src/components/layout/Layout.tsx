import { ReactNode } from 'react';
import Navbar from './navbar/Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex flex-col w-full h-full'>
      <Navbar />
      {children}
      <div>Footer</div>
    </main>
  );
};

export default Layout;
