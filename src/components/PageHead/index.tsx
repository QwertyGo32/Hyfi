import React from 'react';
import {
  StyledWrapperHead,
  StyledWrapperHeadContainer,
  StyledWrapperHeadTitle,
} from './styled';

interface IPageHead {
  title: string;
  textReduced?: boolean;
}

export default function PageHead({
  title,
  textReduced = false,
  ...props
}: IPageHead) {
  return (
    <StyledWrapperHead {...props}>
      <StyledWrapperHeadContainer>
        <StyledWrapperHeadTitle>{title}</StyledWrapperHeadTitle>
      </StyledWrapperHeadContainer>
    </StyledWrapperHead>
  );
}
