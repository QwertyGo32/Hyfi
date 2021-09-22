import styled from 'styled-components';
import breakpoints from '@styles/constants.styled';
import { IRoute } from '@interfaces/IRoutes';
import Link from '@components/Link';
import { SidebarContainer } from '@components/Sidebar/components/SidebarContainer/SidebarContainer';

const StyledNavbarHeader = styled.header`
  display: flex;
  padding: 10px 20px;

  .brand-logo {
    font-size: 1.5em;
    transform: translateX(0);
    transition: 250ms ease-in;
    visibility: visible;
  }
`;

const StyledAside = styled.aside`
  position: fixed;
  padding: 0 0 20px;
  min-width: var(--sidebar-initial-width);
  width: var(--sidebar-initial-width);
  background: #ffffff 0 0 no-repeat padding-box;
  height: calc(100vh - var(--main-top-padding));
  z-index: 9;
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
`;
const StyledAsideMain = styled.main`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
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
      0% 0% no-repeat padding-box;

    span {
      color: var(--main-text-colored);
      &:hover,
      &.active {
        color: #4364f7;
        background: transparent linear-gradient(62deg, #ffffff 0%, #ebeae9 100%)
          0% 0% no-repeat padding-box;

        p {
          color: #4364f7;
        }

        svg {
          * {
            transition: 200ms all ease-in-out;
            fill: var(--main-text-colored);
          }
        }
      }

      & p {
        margin: 0;
      }
    }
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

type AsideProps = {
  routes: IRoute[],
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
                  to={path}
                  exact={exact}
                  className="nav-item"
                >
                  <props.icon />
                  {name}
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

type StyledContainerProps = {
  children?: JSX.Element,
};

const StyledMain = styled.main`
  width: 100%;
  //max-width: 1300px;
  margin: 0;
  @media screen and ${breakpoints.Device.tablet} {
  }
`;

export const StyledContainer = function ({ children }: StyledContainerProps) {
  return <StyledMain id="main-content">{children}</StyledMain>;
};
