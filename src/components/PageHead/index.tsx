import React from 'react';
import {
  StyledWrapperHead,
  StyledWrapperHeadContainer,
  StyledWrapperHeadTitle,
  StyledWrapperHeadText,
} from './styled';

interface IPageHead {
  title: string;
  children: React.ReactNode;
  textReduced?: boolean;
}

export default function PageHead({
  title,
  children,
  textReduced = false,
  ...props
}: IPageHead) {
  return (
    <StyledWrapperHead {...props}>
      <StyledWrapperHeadContainer>
        <StyledWrapperHeadTitle>{title}</StyledWrapperHeadTitle>
        <StyledWrapperHeadText className={`${textReduced ? 'reduced' : ''}`}>
          {children}
        </StyledWrapperHeadText>
      </StyledWrapperHeadContainer>
    </StyledWrapperHead>
  );
}
