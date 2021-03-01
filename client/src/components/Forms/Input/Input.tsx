import classnames from 'classnames';

import './Input.scss';

type InputProps = {
  label?: string;
  textarea?: boolean;
  isValid?: boolean;
  onChange: (e) => void;
  placeholder?: string;
  value?: string;
}

const InputDefaultProps = {
  label: '',
  textarea: false,
  isValid: true,
  placeholder: '',
  value: '',
};

const Input = ({
  label,
  textarea,
  isValid,
  onChange,
  placeholder,
  value,
}: InputProps): JSX.Element => {
  return (
    <label className={classnames('label', {
      'error': !isValid,
    })}>
      {label && (
        <span className='label__text'>
          {label}
        </span>
      )}
      {textarea ? (
        <textarea
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className='input'
        />
      ) : (
        <input
          type='text'
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className='input'
        />
      )}
    </label>
  );
}

Input.defaultProps = InputDefaultProps;

export default Input;
