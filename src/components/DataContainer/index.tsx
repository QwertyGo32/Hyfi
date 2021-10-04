import {
  StyledSection,
  StyledListHeader,
  StyledList,
  StyledListElement,
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
            <StyledListElement key={index} className="list-element">
              {typeof badge !== 'undefined' ? (
                <div className={'styled-list-element__container'}>
                  <span className="title badge">{title ?? ''}</span>
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        Nisl tincidunt eget nullam non nisi est sit amet
                        facilisis magna etiam tempor orci eu lobortis elementum
                        nibh tellus molestie
                      </Tooltip>
                    }
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
