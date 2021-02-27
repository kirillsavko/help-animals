import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from 'constants/routes';

import './Logo.scss';

import { ReactComponent as LogoIcon } from 'assets/img/icons/logo-icon.svg';

const Logo = () => (
  <Link
    to={routes.main}
    className='logo__link'
  >
    <LogoIcon className='logo__icon' />
  </Link>
);

export default Logo;
