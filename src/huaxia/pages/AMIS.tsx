import {render} from 'amis';
import Grid from 'amis/lib/renderers/Grid';
import React from 'react';
import BusinessAnalysis from './aml/BusinessAnalysis';
const AMIS: React.FC = () => {
  return (
    <>
      <BusinessAnalysis />
    </>
  );
};
export default AMIS;
