import { StyledDashboardBlock } from '@pages/Dashboard/styled';
import { StyledDetailsHead } from '@pages/Dashboard/components/DetailsBlock/styled';
import {
  StyledImage,
  StyledLogoContainer,
} from '@components/CompanyLogo/styled';
import React from 'react';

interface IDetailsBlockProps {
  title: string;
  img?: string;
}

export const DetailsBlock = ({ title, img }: IDetailsBlockProps) => {
  return (
    <StyledDashboardBlock>
      <StyledDetailsHead>
        {title}
        <StyledLogoContainer>
          <StyledImage
            src={img}
            data-hasimage={!!img?.length ?? false}
            rounded
            fluid
          />
        </StyledLogoContainer>
      </StyledDetailsHead>
    </StyledDashboardBlock>
  );
};
