import React from 'react';
import {
  StyledWrapperHead,
  StyledWrapperHeadContainer,
  StyledWrapperHeadText,
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
        {title === 'ILO' ? (
          <StyledWrapperHeadText>
            Owners that seek to raise money for their development of New
            technologies; IP, Patents Licenses, Brands and Projects (“Assets”)
            can sell up to a 49% interest in their Assets on the HYFI Platform
            with a right to buy back interests sold. We will introduce your
            Assets to our Global network of Brokers who will introduce Investors
            (Institutional, Corporations, Family Offices, Private Wealth and
            Individuals) who may buy fractional interests in your Assets.
          </StyledWrapperHeadText>
        ) : null}
      </StyledWrapperHeadContainer>
    </StyledWrapperHead>
  );
}
