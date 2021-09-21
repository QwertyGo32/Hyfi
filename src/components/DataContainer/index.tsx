import {
  StyledSection,
  StyledListHeader,
  StyledList,
  StyledListElemet,
} from './styled';
import Link from '@components/Link';
import { ReactComponent as ShareLink } from '@icons/link.svg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export interface IDataContainerProps {
  inTitle: JSX.Element;
}

const data = [
  { title: 'Soft Cap', value: 20000000 },
  { title: 'Total Commited', value: 2000000 },
  { title: 'Participants', value: 200000 },
];

export default function DataContainer({ inTitle }: IDataContainerProps) {
  return (
    <StyledSection>
      {/* <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
      >
        {({ ref, ...triggerHandler }) => (
          <Image
            {...triggerHandler}
            ref={ref}
            roundedCircle
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social-logo.png"
          />
        )}
      </OverlayTrigger>
      <span className="ms-1">Hover to see</span> */}

      <StyledListHeader>
        {inTitle}
        <Link to="#test">
          <ShareLink />
        </Link>
      </StyledListHeader>
      <StyledList>
        {data.map(({ title, value }) => {
          return (
            <StyledListElemet>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="button-tooltip-2">{title}</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <div ref={ref} {...triggerHandler} className="title">
                    {title ?? ''}
                  </div>
                )}
              </OverlayTrigger>

              <span className="value">
                ${value?.toLocaleString('en-GB') ?? ''}
              </span>
            </StyledListElemet>
          );
        })}
      </StyledList>
    </StyledSection>
  );
}
