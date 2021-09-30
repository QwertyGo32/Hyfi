import React, { SyntheticEvent } from 'react';
import { StyledNav, StyledNavItem, StyledNavLink } from './styled';

export interface INavItemList {
  children?: React.ReactNode;
  key?: string | number;
  href?: string;
  text?: string;
  disabled?: boolean;
}

export interface ITabsProps {
  onSelect?: (eventKey: string, event: SyntheticEvent) => void;
  navList: INavItemList[];
}

export default function Tabs({ navList = [], ...props }: ITabsProps) {
  if (navList.length === 0) {
    return null;
  }
  return (
    <StyledNav
      fill
      justify
      variant="pills"
      defaultActiveKey={navList[0].key ?? ''}
      unmountOnExit={false}
      mountOnEnter={false}
      onSelect={props.onSelect}
    >
      {navList.map(({ children, key, href, text, disabled }) => {
        return (
          <StyledNavItem>
            {key && (
              <StyledNavLink eventKey={key} disabled={disabled ?? false}>
                {text ?? children ?? ''}
              </StyledNavLink>
            )}
            {href && (
              <StyledNavLink href={href} disabled={disabled ?? false}>
                {text ?? children ?? ''}
              </StyledNavLink>
            )}
          </StyledNavItem>
        );
      })}
    </StyledNav>
  );
}
