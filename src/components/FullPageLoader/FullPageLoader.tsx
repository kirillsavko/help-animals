import React from 'react';

import './FullPageLoader.scss';

import { ReactComponent as SpinnerIcon } from 'assets/img/icons/spinner-icon.svg';

const FullPageLoader = (): JSX.Element => (
  <div className='full-page-loader'>
    <SpinnerIcon className='full-page-loader__icon' />
  </div>
);

export default FullPageLoader;
