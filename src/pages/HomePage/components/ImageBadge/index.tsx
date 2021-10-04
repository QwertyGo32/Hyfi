import React from 'react';
import { StyledBadge, StyledSpan } from './styled';

interface IPropsImageBadge {
  img: string;
  text: React.ReactNode;
  pathname?: string;
  search?: string;
  hash?: string;
}

export default function ImageBadge({ img, text, pathname }: IPropsImageBadge) {
  return (
    <StyledBadge
      to={{
        pathname: pathname ? `/${pathname}` : '',
        state: { fromDashboard: true },
      }}
      image={img}
    >
      <StyledSpan>{text}</StyledSpan>
    </StyledBadge>
  );
}
