import React, { ReactElement } from 'react';
import Image from 'next/image';
import { Divider, Pagination } from '@mui/material';

function ActivSection({ posts }): ReactElement {
  return (
    <div className='activsection  p-1.5'>
      <div className='activ-content-wrapper'>
        {posts?.map((_each, _ind) => (
          <div key={_each.id} className={`flex justify-center mt-4 items-center`}>
            <img
              className={`w-6/12 flex justify-center order-${_ind % 2 && '2'}`}
              src={'https://via.placeholder.com/225x150'}
              alt='sample'
            />
            <p className='w-6/12 flex justify-center activ-description p-3'>
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            </p>
          </div>
        ))}
      </div>
      <Pagination className='w-12/12 flex justify-end mt-6' count={10} hidePrevButton hideNextButton />
      <Divider className='mt-5' light />
    </div>
  );
}

export default ActivSection;
