import './InputGroup.scss';

type InputGroupProps = {
  children: string | JSX.Element;
  className?: string;
}

const InputGroupPropsDefault = {
  className: '',
};

const InputGroup = ({
  children,
  className,
}: InputGroupProps): JSX.Element => {
  return (
    <div className={`input-group ${className}`}>
      {children}
    </div>
  );
};

InputGroup.defaultProps = InputGroupPropsDefault;

export default InputGroup;
