import React, { ReactElement } from 'react';
import HighlightKeepKruContent from '../../components/KeepKru/HighlightKeepKruContent';
import Layout from '../../components/layout/Layout';

function KeepKru(): ReactElement {
  return (
    <Layout>
      <div className='keepkru'>
        <HighlightKeepKruContent />
      </div>
    </Layout>
  );
}

export default KeepKru;
