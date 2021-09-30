import React from 'react';
import { StyledBadge, StyledSpan } from './styled';

interface IPropsImageBadge {
  img: string;
  text: React.ReactNode;
}

export default function ImageBadge({ img, text }: IPropsImageBadge) {
  return (
    <StyledBadge image={img}>
      <StyledSpan>{text}</StyledSpan>
    </StyledBadge>
  );
}
