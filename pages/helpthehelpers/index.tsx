import React, { ReactElement } from 'react';
import HighlightContent from '../../components/Help/HighlightContent';
import TitleContainer from '../../components/Help/TitleContainer';
import Layout from '../../components/layout/Layout';

function helpthehelpers(): ReactElement {
  return (
    <Layout>
      <div className='help'>
        <TitleContainer />
        <HighlightContent/>
      </div>
    </Layout>
  );
}

export default helpthehelpers;
