import classnames from 'classnames';
import { FormikErrors } from 'formik';

import './Input.scss';

type InputProps = {
  id?: string;
  label?: string;
  textarea?: boolean;
  isValid?: boolean;
  onChange: (e) => void;
  placeholder?: string;
  value?: string;
  errorMsg?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
}

const InputDefaultProps = {
  id: '',
  label: '',
  textarea: false,
  isValid: true,
  placeholder: '',
  value: '',
  errorMsg: '',
};

const Input = ({
  id,
  label,
  textarea,
  isValid,
  onChange,
  placeholder,
  value,
  errorMsg,
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
          id={id}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className='input'
        />
      ) : (
        <input
          id={id}
          type='text'
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className='input'
        />
      )}
      {(errorMsg && !isValid) && (
        <div className='label__error-msg'>
          {errorMsg}
        </div>
      )}
    </label>
  );
}

Input.defaultProps = InputDefaultProps;

export default Input;
