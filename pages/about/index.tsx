import { Divider } from '@mui/material';
import React, { ReactElement } from 'react';
import Layout from '../../components/layout/Layout';

interface Props {}

function AboutPage({}: Props): ReactElement {
  return (
    <Layout>
      <div className='about-page'>
        <div className='hero'>
          <img src={'https://via.placeholder.com/700X350'} alt='sample' />
        </div>
        <div className='history'>
          <div className='text-white w-40 text-left mt-10  p-3 bg-blue-dark'>
            ประวัติตวามเป็นมา
          </div>
          <div className={`flex justify-center mt-4 items-start`}>
            <img
              className={`w-6/12 flex justify-center  order-2`}
              src={'https://via.placeholder.com/350X350'}
              alt='sample'
            />
            <p className='w-6/12 flex justify-center activ-description p-3'>
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            </p>
          </div>
        </div>
        <div className='vision'>
          <div className='text-white w-56 text-left mt-10  p-3 bg-blue-dark'>
            วิสัยทัศน์และวัตถุประสงค์
          </div>
          <div className={`flex mt-4 items-start`}>
            <p className='w-fullflex activ-description p-3'>
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            </p>
          </div>
          <div className='flex justify-between'>
            <img
              className={` flex justify-center`}
              src={'https://via.placeholder.com/280X200'}
              alt='sample'
            />
            <img
              className={` flex justify-center`}
              src={'https://via.placeholder.com/280X200'}
              alt='sample'
            />
          </div>
        </div>
        <Divider className='mt-5' />
        <div className='flex w-full'>
          <div className='w-6/12 p-5'>
            <div className='text-white w-40 text-left p-3 bg-blue-dark'>
              คณะกรรมการมูลนิธิ
            </div>
            <ol className='flex mt-3 flex-col'>
              <li>1. XXXXXX XXXXXX</li>
              <li>2. XXXXXX XXXXXX</li>
              <li>3. XXXXXX XXXXXX</li>
            </ol>
          </div>
          <div className='w-6/12 p-5'>
            <div className='text-white w-40 text-left p-3 bg-blue-dark'>
              ผู้สนับสนุนมูลนิธิ
            </div>
            <ol className='flex mt-3 flex-col'>
              <li>1. XXXXXX XXXXXX</li>
              <li>2. XXXXXX XXXXXX</li>
              <li>3. XXXXXX XXXXXX</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
