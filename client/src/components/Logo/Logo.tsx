import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { routes } from 'constants/routes';

import './Logo.scss';

import { ReactComponent as LogoIcon } from 'assets/img/icons/logo-icon.svg';

type LogoProps = {
  white?: boolean;
}

const LogoDefaultProps = {
  white: false,
};

const Logo = ({
  white,
}: LogoProps): JSX.Element => (
  <Link
    to={routes.main}
    className={classnames('logo', {
      white,
    })}
  >
    <LogoIcon className='logo__icon' />
  </Link>
);

Logo.defaultProps = LogoDefaultProps;

export default Logo;
