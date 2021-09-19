import React, { ReactElement } from 'react';

function Location(): ReactElement {
  return (
    <div className='location'>
      <div className={`flex w-full mt-4 items-start`}>
        <div className='flex flex-col items-start border-r-2 w-6/12  p-2'>
          <h3 className='text-white mb-3 items-center p-3 bg-blue-dark'>
            มูลนิธิชัยอนันต์
          </h3>
          <div className='flex-col text-md h-6/6 flex justify-between w-12/12 '>
            Chanan Foundation
          </div>
          <div className='flex-col text-sm h-6/6 flex justify-between w-12/12 '>
            www.chaiananfoundation.org
          </div>
          <div className='flex-col text-sm h-6/6 flex justify-between w-12/12 '>
            Email
          </div>
          <div className='flex-col text-sm h-6/6 flex justify-between w-12/12 '>
            โทร
          </div>
        </div>
        <div className='flex w-4/12  p-2'>
          <div className='flex flex-col'>
            <h3 className='text-white mb-3 items-center p-3 bg-blue-dark w-16'>
              ที่อยู่
            </h3>
            XXXXXXXXXX
            <br/>
            XXXXXXXXXX
            <br/>
            XXXXXXXXXX
          </div>
        </div>
        <div className='flex w-2/12 h-full  p-2'>
        <img
              className={`w-full`}
              src={'https://via.placeholder.com/225x400'}
              alt='sample'
            />
           
        </div>
      </div>
    </div>
  );
}

export default Location;
