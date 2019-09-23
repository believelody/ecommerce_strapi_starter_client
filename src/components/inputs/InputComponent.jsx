import React from 'react';
import PropTypes from 'prop-types';
import { Pane, TextInput } from 'evergreen-ui'

const InputComponent = ({ name, type = 'text', placeholder, handleChange, error, required }) => {
  return (
    <Pane>
      <TextInput
        name={name}
        type={type}
        placeholder={placeholder}
        isInvalid={!!error}
        required={required}
        onChange={handleChange}
      />
    </Pane>
  );
}

InputComponent.propTypes = {
};

export default InputComponent;
