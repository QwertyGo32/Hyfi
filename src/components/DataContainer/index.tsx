import {
  StyledSection,
  StyledListHeader,
  StyledList,
  StyledListElemet,
} from './styled';
import Link from '@components/Link';
import { ReactComponent as ShareLink } from '@icons/link.svg';
import { ReactComponent as Badge } from '@icons/question-mark.svg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

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
}: IDataContainerProps) {
  return (
    <StyledSection>
      <StyledListHeader>
        {inTitle}
        {typeof customTitleBadge !== 'undefined' ? (
          customTitleBadge
        ) : (
          <Link to={linksTo ?? '#'}>
            <ShareLink />
          </Link>
        )}
      </StyledListHeader>
      <StyledList>
        {listData.map(({ title, value, badge }, index) => {
          return (
            <StyledListElemet key={index}>
              {typeof badge !== 'undefined' ? (
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip id="button-tooltip-2">{title}</Tooltip>}
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
