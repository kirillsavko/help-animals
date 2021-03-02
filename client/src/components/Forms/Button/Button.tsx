import classnames from 'classnames';

import './Button.scss';

import { ReactComponent as SpinnerIcon } from 'assets/img/icons/spinner-icon.svg';

type ButtonProps = {
  type?: 'button' | 'submit'
  children: string | JSX.Element;
  onClick?: (e: any) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const ButtonPropsDefault = {
  type: 'button',
  onClick: () => {
    return
  },
  className: '',
  disabled: false,
  loading: false,
};

const Button = ({
  type,
  children,
  onClick,
  className,
  disabled,
  loading,
}: ButtonProps): JSX.Element => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={classnames('btn', {
      className,
    })}
  >
    {loading && (
      <div className='btn__loading'>
        <SpinnerIcon className='btn__loading-icon' />
      </div>
    )}
    {children}
  </button>
);

Button.defaultProps = ButtonPropsDefault;

export default Button;
