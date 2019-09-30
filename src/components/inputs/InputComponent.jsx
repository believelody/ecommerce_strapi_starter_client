import React from 'react';
import PropTypes from 'prop-types';
import { Pane, TextInput } from 'evergreen-ui'

const InputComponent = ({ name, type = 'text', placeholder, handleChange, error, required, value, width }) => {
  return (
    <Pane width={width ? width : '100%'}>
      <TextInput
        name={name}
        type={type}
        placeholder={placeholder}
        isInvalid={!!error}
        required={required}
        onChange={handleChange}
        value={value}
      />
    </Pane>
  );
}

InputComponent.propTypes = {
};

export default InputComponent;
