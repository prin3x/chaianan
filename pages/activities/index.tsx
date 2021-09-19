import React, { ReactElement } from 'react';
import Layout from '../../components/layout/Layout';

interface Props {}

function ActivityPage({}: Props): ReactElement {
  return (
    <Layout>
      <div className='activ-page'>
        <div className='by-foundation flex flex-col'>
          <div className='text-white w-56 text-left  p-3 bg-blue-dark'>
            กิจกรรมที่ดำเนินการโดยมูลนิธิ
          </div>
          <div className='items flex mt-10'>
            <img src={'https://via.placeholder.com/225x150'} alt='sample' />
            <div className='flex-col ml-10'>
              <h4 className='title'>ชื่อกิจกรรม</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur
              </p>
            </div>
          </div>
          <div className='items flex mt-10'>
            <img src={'https://via.placeholder.com/225x150'} alt='sample' />
            <div className='flex-col ml-10'>
              <h4 className='title'>ชื่อกิจกรรม</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur
              </p>
            </div>
          </div>
          <div className='items flex mt-10'>
            <img src={'https://via.placeholder.com/225x150'} alt='sample' />
            <div className='flex-col ml-10'>
              <h4 className='title'>ชื่อกิจกรรม</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur
              </p>
            </div>
          </div>
        </div>
        <div className="support-foundation mt-10">
        <div className='text-white w-56 text-left  p-3 bg-blue-dark'>
            กิจกรรมที่ดำเนินการโดยมูลนิธิ
          </div>
          <div className='items flex mt-10'>
            <img src={'https://via.placeholder.com/225x150'} alt='sample' />
            <div className='flex-col ml-10'>
              <h4 className='title'>ชื่อกิจกรรม</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur
              </p>
            </div>
          </div>
          <div className='items flex mt-10'>
            <img src={'https://via.placeholder.com/225x150'} alt='sample' />
            <div className='flex-col ml-10'>
              <h4 className='title'>ชื่อกิจกรรม</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur
              </p>
            </div>
          </div>
          <div className='items flex mt-10'>
            <img src={'https://via.placeholder.com/225x150'} alt='sample' />
            <div className='flex-col ml-10'>
              <h4 className='title'>ชื่อกิจกรรม</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ActivityPage;
