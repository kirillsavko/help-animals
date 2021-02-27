import './Button.scss';

type ButtonProps = {
  children: string | JSX.Element;
  onClick: () => void;
  className?: string;
}

const ButtonPropsDefault = {
  className: '',
};

const Button = ({
  children,
  onClick,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = ButtonPropsDefault;

export default Button;
