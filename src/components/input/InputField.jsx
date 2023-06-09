import React from 'react';
import './InputField.css';

const InputField = ({
  // role,
  disable,
  className,
  name,
  value,
  label,
  placeholder,
  type,
  onChange,
  onBlur,
  onKeyDown
}) => {
  return (
    <div className='inputlabelcontainer' role='inputdiv'>
      {label && (
        <label htmlFor='input-field' className='inputlabel'>
          {label}
        </label>
      )}

      <input
        onBlur={onBlur}
        className={className}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        // role={role}
        disabled={disable}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default InputField;
