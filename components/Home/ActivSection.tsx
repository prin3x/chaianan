import React, { ReactElement } from 'react';
import Image from 'next/image';

function ActivSection({posts}): ReactElement {
  return (
    <div className='activsection'>
      <h2 className='headliner'>Activities</h2>
      <div className="activ-content-wrapper">

      {posts?.map((_each) => (
          <div key={_each.id} className='activ-card'>
          <Image src={_each.image} width={200} height={200} />
          <p className='activ-description'>{_each.title}</p>
        </div>
      ))}
      </div>
    </div>
  );
}



export default ActivSection;
