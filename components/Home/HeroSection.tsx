import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='herosection'>
      <div className='herosection-content bg-gray-light  flex justify-center p-1.5'>
        <div className='abount-foundtaion w-6/12'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type
          </div>
        <div className='herosection-image w-6/12 flex justify-center'>
          <Image className='w-12/12' src='/assets/logo1.png' width={120} height={150} alt='logo' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
