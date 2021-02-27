import Logo from 'components/Logo';

import './Footer.scss';

import { ReactComponent as InstIcon } from 'assets/img/icons/inst-icon.svg';
import { ReactComponent as LinkedinIcon } from 'assets/img/icons/linkedin-icon.svg';

const Footer = (): JSX.Element => (
  <footer className='footer'>
    <div className='container'>
      <div className='footer__wrap'>
        <Logo white />
        <div className='footer__copyright'>© Copyright 2021</div>
        <div className='footer__socials'>
          <a
            href='https://www.instagram.com/kirill_savko/'
            target='_blank'
            className='footer__socials-link'
          >
            <InstIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/kirill-savko/'
            target='_blank'
            className='footer__socials-link'
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
