import React, { SyntheticEvent } from 'react';
import { StyledNav, StyledNavItem, StyledLink, StyledNavLink } from './styled';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
export interface INavItemList {
  children?: React.ReactNode;
  key?: string | number;
  href?: string;
  text?: string;
  disabled?: boolean;
  isLinkActive?: () => boolean;
}

export interface ITabsProps {
  activeKey?: string | number;
  onSelect?: (eventKey: string, event: SyntheticEvent) => void;
  navList: INavItemList[];
}

export default function Tabs({
  activeKey = 1,
  navList = [],
  ...props
}: ITabsProps) {
  if (navList.length === 0) {
    return null;
  }

  return (
    <StyledNav
      fill
      justify
      activeKey={activeKey}
      variant="pills"
      defaultActiveKey={navList[0].key ?? navList[0].href ?? ''}
      unmountOnExit={false}
      mountOnEnter={false}
      onSelect={props.onSelect}
    >
      {navList.map(
        ({ children, key, href, text, disabled, isLinkActive }, index) => {
          return (
            <StyledNavItem key={index}>
              {key && (
                <StyledNavLink eventKey={key} disabled={disabled ?? false}>
                  {text ?? children ?? ''}
                </StyledNavLink>
              )}
              {/* {href && <Nav.Link href={href}>{text ?? children ?? ''}</Nav.Link>} */}
              {href && (
                <StyledLink
                  isActive={isLinkActive}
                  activeClassName="active"
                  className={`nav-link `}
                  data-disabled={disabled ?? false}
                  to={disabled ? '#' : href}
                >
                  {text ?? children ?? ''}
                </StyledLink>
              )}
            </StyledNavItem>
          );
        }
      )}
    </StyledNav>
  );
}
