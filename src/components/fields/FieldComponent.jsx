import React from 'react';
import PropTypes from 'prop-types';
import { Pane, TextInputField } from 'evergreen-ui'

const FieldComponent = ({
  label, description = '', hint = '', name, type = 'text', placeholder, handleChange, error, validationMessage
}) => {
  return (
    <Pane>
      <TextInputField
        label={label}
        description={description}
        hint={hint}
        name={name}
        type={type}
        placeholder={placeholder}
        isInvalid={!!error}
        onChange={handleChange}
        validationMessage={error}
      />
    </Pane>
  );
}

FieldComponent.propTypes = {
};

export default FieldComponent;
