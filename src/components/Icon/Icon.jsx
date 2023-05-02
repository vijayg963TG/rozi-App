import React from 'react';
import { ReactSVG } from 'react-svg';
import styled, { css } from 'styled-components';

const StyledSVGIcon = styled(ReactSVG)`
  svg {
    fill: ;
    ${({ size }) =>
      size &&
      css`
        width: ${size};
        height: ${size};
      `}
    ${({ radius }) =>
      radius &&
      css`
        border-radius: ${radius};
      `}
    ${({ transform }) =>
      transform &&
      css`
        transform: ${transform};
      `}
    path {
      ${({ color }) =>
        color &&
        css`
          fill: ${color};
        `}
    }
  }
`;

const Icon = (props) => {
  let src = '/assets/icons/';
  if (props.path) {
    src = props.path;
  }
  return (
    <StyledSVGIcon
      src={`${src}${props.name}.svg`}
      color={props.color}
      size={props.size}
      radius={props.radius}
      transform={props.transform}
      className={props?.class}
    />
  );
};

export default Icon;
