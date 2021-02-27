import Logo from 'components/Logo';
import Button from 'components/Button';

import './Header.scss';

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrap'>
          <Logo />
          <Button
            onClick={() => console.log('qqq')}
            className='header__btn'
          >
            Добавить питомца
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
