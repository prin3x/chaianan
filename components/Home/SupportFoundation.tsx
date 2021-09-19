import { Button, Divider } from '@mui/material';
import React, { ReactElement } from 'react';

function SupportFoundation(): ReactElement {
  return (
    <div className='flex-col w-full items-center justify-center text-center mt-5 text-sm h-full '>
      <div className='text-white w-4/12 items-center  mx-auto  p-3 bg-blue-dark'>
        สนับสนุนมูลนิธิ
      </div>
      <div className={`flex w-full justify-center mt-4 items-center`}>
        <div className='flex w-6/12 justify-start mt-4 border-r-2  p-2'>
            <img
              className={`w-6/12 flex justify-center`}
              src={'https://via.placeholder.com/225x150'}
              alt='sample'
            />
          <div className='flex-col h-6/6 flex justify-between w-12/12 '>
            <p className='w-12/12 flex justify-center activ-description p-0.5 pl-5'>
              เข้าร่วมกิจกรรม
              <br />
              กับมูลนิธิ
            </p>
            {/* <Button
              className={`w-12/12 flex justify-center`}
              variant='outlined'
            >
              เข้าร่วม
            </Button> */}
          </div>
        </div>
        <div className='flex w-6/12 justify-between mt-4 p-2'>
          <p className='w-6/12 flex justify-center activ-description p-3'>
            เลขบัญชีธนาคาร
            <br />
            xxx-xxx-xxx
            <br />
            ชื่อบัญชีมูลนิธิชัยอนันต์
          </p>
          <div className='flex flex-col  h-6/6 justify-between w-6/12'>
            <img
              className={`w-8/12 flex self-end`}
              src={'https://via.placeholder.com/225x150'}
              alt='sample'
            />
          </div>
        </div>
      </div>
      <Divider className='mt-5'/>
    </div>
  );
}

export default SupportFoundation;
