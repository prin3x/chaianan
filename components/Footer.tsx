import React, { ReactElement } from 'react';
import Image from 'next/image'

function Footer(): ReactElement {
  return (
      <div className='footer'>
        <Image src='/assets/logo1.png' width={70} height={100} />
      </div>
  );
}

export default Footer;
