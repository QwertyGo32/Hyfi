import { StyledList, StyledListHeader } from '@components/DataContainer/styled';
import { ReactComponent as ShareLink } from '@icons/link.svg';
import Link from '@components/Link';

export interface ITitleContainerProps {
  inTitle: JSX.Element;
  listTitles: ITitleContainerListTitles[];
  customTitleBadge?: JSX.Element;
  linksTo?: string;
}

interface ITitleContainerListTitles {
  title: string | JSX.Element;
}

export const TitleContainer = ({
  listTitles,
  customTitleBadge,
  linksTo,
}: ITitleContainerProps) => {
  return (
    <StyledList className="list">
      {listTitles.map(({ title }, index) => {
        return index === 0 ? (
          <StyledListHeader className="header list-header__first-item">
            {title}
            {typeof customTitleBadge !== 'undefined' ? (
              customTitleBadge
            ) : (
              <Link to={linksTo ?? '#'}>
                <ShareLink />
              </Link>
            )}
          </StyledListHeader>
        ) : (
          <StyledListHeader className="header">
            {title}
            {typeof customTitleBadge !== 'undefined' ? (
              customTitleBadge
            ) : (
              <Link to={linksTo ?? '#'}>
                <ShareLink />
              </Link>
            )}
          </StyledListHeader>
        );
      })}
    </StyledList>
  );
};
