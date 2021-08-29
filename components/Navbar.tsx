import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <Image src='/assets/logo1.png' width={70} height={100} />
      </div>
      <div className='navbar-items-list'>
        <ul className='navbar-list'>
          <li className='navbar-items'>
            <Link href='/about'>
              <a>รู้จักมูลนิธิ</a>
            </Link>
          </li>
          <li className='navbar-items'>
            <Link href='/about'>
              <a>Help the Helpers</a>
            </Link>
          </li>
          <li className='navbar-items'>
            <Link href='/about'>Keep Kri</Link>
          </li>
          <li className='navbar-items'>
            <Link href='/about'>ผลงาน</Link>
          </li>
          <li className='navbar-items'>
            <Link href='/about'>ติดต่อเรา</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
