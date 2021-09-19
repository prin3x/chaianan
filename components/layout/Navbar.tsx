import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar max-w-screen-sm flex w-full bg-blue-dark mx-auto '>
      <div className='logo-container p-5  max-w-md w-2/12'>
        <Image src='/assets/logo1.png' width={70} height={100} alt='logo' />
      </div>
      <div className='flex justify-center text-white w-10/12'>
        <ul className='navbar-list flex items-center'>
          <li className='navbar-items flex'>
            <Link href='/'>
              <a>หน้าแรก</a>
            </Link>
          </li>
          <li className='navbar-items'>
            <Link href='/about'>
              <a>รู้จักมูลนิธิ</a>
            </Link>
          </li>
          <li className='navbar-items'>
            <Link href='/activities'>
              <a>กิจกรรม</a>
            </Link>
          </li>
          <li className='navbar-items'>
            <Link href='/'>
              <a>ติดต่อเรา</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
