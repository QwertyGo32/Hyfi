import {
  StyledDashboardBlock,
  StyledDashboardBlockTitle,
} from '@pages/Dashboard/styled';
import {
  StyledBtn,
  StyledDetailsHead,
} from '@pages/Dashboard/components/DetailsBlock/styled';
import {
  StyledImage,
  StyledLogoContainer,
} from '@components/CompanyLogo/styled';
import React from 'react';
import {
  StyledList,
  StyledListElement,
} from '@components/DataContainer/styled';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { ReactComponent as Badge } from '@icons/question-mark.svg';

interface IDetailsBlockProps {
  title: string;
  img?: string;
  listData: IDataContainerListData[];
}

interface IDataContainerListData {
  title: string | JSX.Element;
  value: number | string | JSX.Element;
  badge?: string | number;
  tooltip?: string;
}

export const DetailsBlock = ({ title, img, listData }: IDetailsBlockProps) => {
  return (
    <StyledDashboardBlock className={'details-block'}>
      <StyledDetailsHead>
        <StyledDashboardBlockTitle>{title}</StyledDashboardBlockTitle>
        <StyledLogoContainer>
          <StyledImage
            src={img}
            data-hasimage={!!img?.length ?? false}
            rounded
            fluid
          />
        </StyledLogoContainer>
      </StyledDetailsHead>
      <StyledList className="list">
        {listData.map(({ title, value, tooltip, badge }, index) => {
          return (
            <StyledListElement key={index} className="list-element">
              {typeof badge !== 'undefined' ? (
                <div className={'styled-list-elem__container'}>
                  <span className="title badge">{title ?? ''}</span>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="button-tooltip-2">{tooltip}</Tooltip>}
                  >
                    <Badge />
                  </OverlayTrigger>
                </div>
              ) : (
                <span className="title">{title ?? ''}</span>
              )}
              <span className="value">{value}</span>
            </StyledListElement>
          );
        })}
      </StyledList>
      <StyledBtn theme={'gradient'}>Participate</StyledBtn>
    </StyledDashboardBlock>
  );
};
