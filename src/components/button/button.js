import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { disableHighlight } from 'styles/mixins';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #63b99f;
  background: ${({ isDisabled }) => (isDisabled ? '#d3dde4' : '#63b99f')};
  color: #fff;
  height: 44px;
  width: 343px;
  border-radius: 6px;
  margin: 16px 0px;
  font-size: 20px;
  letter-spacing: 0.62px;
  text-transform: uppercase;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease;
  &:hover {
    ${({ isDisabled }) => (isDisabled ? '' : `
      box-shadow: 0px 7px 14px rgba(50, 50, 93, 0.11), 0px 3px 6px rgba(0, 0, 0, 0.08);
      transform: translateY(${isDisabled ? '0px' : '-1px'});
    `)}
  }
  ${disableHighlight}
`;

function Button({ label, isDisabled, onClickHandler }) {
  return (
    <ButtonWrapper
      isDisabled={isDisabled}
      onClick={isDisabled ? () => {} : onClickHandler}
    >
      {label}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  label: 'submit',
  isDisabled: false,
  onClickHandler: () => {},
};

Button.propTypes = {
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClickHandler: PropTypes.func,
};

export default Button;
