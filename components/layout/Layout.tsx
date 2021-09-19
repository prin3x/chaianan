import React, { ReactElement } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }): ReactElement {
  return (
    <div className="bg-bright">
      <Navbar />
      <div className=' h-full mx-auto max-w-screen-sm content p-5 bg-white'>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
