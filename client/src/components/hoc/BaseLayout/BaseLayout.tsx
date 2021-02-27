import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import './BaseLayout.scss';

type BaseLayoutProps = {
  children: string | JSX.Element
}

const BaseLayout = ({
  children,
}: BaseLayoutProps): JSX.Element => (
  <div className='wrapper'>
    <Header />
    <main className='main'>
      {children}
    </main>
    <Footer />
  </div>
);

export default BaseLayout;
