import styled, { css } from 'styled-components';
import breakpoints from '@styles/constants.styled';
import { IRoute } from '@interfaces/IRoutes';
import Link from '@components/Link';
import { SidebarContainer } from '@components/Sidebar/components/SidebarContainer/SidebarContainer';
import { LinksEnum } from '@interfaces/LinksEnum';

const StyledAside = styled.aside`
  position: fixed;
  z-index: 19;
  padding: 0 0 20px;
  min-width: var(--sidebar-initial-width);
  width: var(--sidebar-initial-width);
  background: var(--main-default-bg) 0 0 no-repeat padding-box;
  height: calc(100vh - var(--main-top-padding));
  visibility: visible;
  opacity: 1;
  transform: translateX(0);
  transition: 250ms ease-in;
  border: 1px solid var(--main-default-wrapper-border);
  border-top: none;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  @media screen and ${breakpoints.Device.tablet} {
    position: fixed;
    top: var(--main-top-padding);
    height: 100%;
    overflow: auto;
  }

  @media screen and ${breakpoints.Device.tablet} {
    transform: translateX(calc(var(--sidebar-initial-width) * -1));
  }
`;
const StyledAsideMain = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 100px;

  @media screen and ${breakpoints.Device.tablet} {
    justify-content: flex-start;
  }

  @media screen and (max-height: 550px) {
    &::-webkit-scrollbar {
      /* 1 - скроллбар */
      width: 4px;
      height: 4px;
      background-color: #ffffff;
    }

    &::-webkit-scrollbar-thumb {
      /* 5 - ползунок */
      border-radius: 2px;
      background-color: var(--main-default-block-shadow);
    }
  }
`;

const StyledAsideListElement = styled(Link)`
  display: grid;
  grid-template-columns: minmax(max-content, 24px) 1fr;
  gap: 25px;
  padding: 30px 36px;
  cursor: pointer;
  transition: 200ms all ease-in-out;
  transform: translateX(0);
  user-select: none;
  background: white;

  span {
    transition: 200ms all ease-in-out;
    text-decoration: none;
    margin: 0;
  }

  align-items: center;
  text-decoration: none;

  svg {
    * {
      transition: 200ms all ease-in-out;
      fill: var(--main-text-default);
    }
  }

  &.active {
    pointer-events: none;
  }

  &:hover,
  &.active {
    color: var(--main-text-colored);
    background: transparent
      linear-gradient(
        62deg,
        var(--main-default-bg) 0%,
        var(--main-sidebar-transition-bg) 100%
      )
      0 0 no-repeat padding-box;
    &:hover,
    &.active {
      color: var(--main-text-colored);
      svg {
        * {
          fill: var(--main-text-colored);
        }
      }
      span {
        color: var(--main-text-colored);
      }
    }
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

type AsideProps = {
  routes: IRoute[];
};

export const AsideComponent = function ({ routes }: AsideProps) {
  return (
    <StyledAside id="sidebar">
      <StyledAsideMain>
        <StyledList>
          {routes.map(({ link, name, path, exact, ...props }, index) =>
            link ? (
              <li key={index}>
                <StyledAsideListElement
                  activeClassName="active"
                  isActive={(_, { pathname }) => {
                    if (typeof link === 'string') {
                      return (
                        pathname.split('/')[1] ===
                        (typeof link === 'string' ? link.split('/')[1] : path)
                      );
                    }
                    return (
                      pathname === (typeof link === 'string' ? link : path)
                    );
                  }}
                  to={typeof link === 'string' ? link : path}
                  exact={exact}
                  className="nav-item"
                >
                  {props.icon && <props.icon />}
                  <span>{name}</span>
                </StyledAsideListElement>
              </li>
            ) : null
          )}
        </StyledList>
        <SidebarContainer />
      </StyledAsideMain>
    </StyledAside>
  );
};

interface StyledContainerProps {
  bgrImg?: string;
  children?: JSX.Element;
}

const StyledMain = styled.main`
  width: 100%;
  padding-bottom: var(--main-footer-height);
  //max-width: 1300px;
  &[data-page='${LinksEnum.ILO}'] {
    padding-left: var(--sidebar-initial-width);
  }
  &:not([data-page='${LinksEnum.ILO}']) {
    padding-left: calc(var(--sidebar-initial-width) + 8.5%);
    padding-right: 40px;
  }

  @media screen and ${breakpoints.Device.tablet} {
    &:not([data-page='${LinksEnum.ILO}']) {
      padding-left: 20px;
      padding-right: 20px;
    }

    &[data-page='${LinksEnum.ILO}'] {
      padding-left: 0;
    }
  }

  padding-bottom: 96px;
  transition-duration: 0.5s;
  display: flex;
  align-items: center;
  ${(props: StyledContainerProps) => {
    return css`
      background: #fafafc url(${props.bgrImg ?? ''}) no-repeat center/cover;
    `;
  }}
`;

export const StyledContainer = function ({
  children,
  ...props
}: StyledContainerProps) {
  return (
    <StyledMain id="main-content" {...props}>
      {children}
    </StyledMain>
  );
};
