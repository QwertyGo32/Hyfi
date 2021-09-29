import {
  StyledSection,
  StyledListHeader,
  StyledList,
  StyledListElemet,
} from './styled';
import Link from '@components/Link';
import { ReactComponent as ShareLink } from '@icons/link.svg';
import { ReactComponent as Badge } from '@icons/question-mark.svg';
import { ReactComponent as DropdownArrow } from '@icons/dropdown-arrow.svg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import styled from 'styled-components';

export interface IDataContainerProps {
  inTitle: JSX.Element;
  listData: IDataContainerListData[];
  customTitleBadge?: JSX.Element;
  linksTo?: string;
}

interface IDataContainerListData {
  title: string | JSX.Element;
  value: number | string | JSX.Element;
  badge?: string | number;
}

export default function DataContainer({
  inTitle,
  listData,
  customTitleBadge,
  linksTo,
  ...props
}: IDataContainerProps) {
  return (
    <StyledSection {...props}>
      <StyledListHeader className="header">
        {inTitle}
        {typeof customTitleBadge !== 'undefined' ? (
          customTitleBadge
        ) : (
          <Link to={linksTo ?? '#'}>
            <ShareLink />
          </Link>
        )}
      </StyledListHeader>
      <StyledList className="list">
        {listData.map(({ title, value, badge }, index) => {
          return (
            <StyledListElemet key={index} className="list-element">
              {typeof badge !== 'undefined' ? (
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      Nisl tincidunt eget nullam non nisi est sit amet facilisis
                      magna etiam tempor orci eu lobortis elementum nibh tellus
                      molestie
                    </Tooltip>
                  }
                >
                  {({ ref, ...triggerHandler }) => (
                    <span ref={ref} {...triggerHandler} className="title badge">
                      {title ?? ''}
                      <Badge />
                    </span>
                  )}
                </OverlayTrigger>
              ) : (
                <span className="title">{title ?? ''}</span>
              )}
              <span className="value">{value}</span>
            </StyledListElemet>
          );
        })}
      </StyledList>
    </StyledSection>
  );
}

export const StyledDropdownBtn = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

export const StyledDropdownBtnText = styled.p`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  color: var(--main-text-colored);
  margin-right: 5px;
  margin-bottom: 0;
`;
