import React, { ReactElement } from 'react';
import HighlightContent from '../../components/help/HighlightContent';
import TitleContainer from '../../components/help/TitleContainer';
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
