import React, { useState, SyntheticEvent } from 'react';
import { StyledNav, StyledNavItem, StyledNavLink, TabsTypes } from './styled';
import { gradientBtnTypes } from '@components/Btn';

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
  theme?: `${TabsTypes}`;
}

export default function Tabs({ theme, navList = [], ...props }: ITabsProps) {
  const [selected, setSelected] = useState(
    navList[0].key ?? navList[0].href ?? ''
  );
  if (navList.length === 0) {
    return null;
  }
  return (
    <StyledNav
      fill
      justify
      variant="pills"
      activeKey={selected}
      defaultActiveKey={navList[0].key ?? navList[0].href ?? ''}
      unmountOnExit={false}
      mountOnEnter={false}
      onSelect={(
        eventKey: string,
        event: React.SyntheticEvent<HTMLSelectElement>
      ) => {
        setSelected(eventKey);
        props?.onSelect?.call(eventKey, eventKey, event);
      }}
    >
      {navList.map(({ children, key, href, text, disabled }, index) => {
        return (
          <StyledNavItem key={index}>
            {key && (
              <StyledNavLink
                className={`${theme}`}
                active={selected === key}
                eventKey={key}
                disabled={disabled ?? false}
              >
                {text ?? children ?? ''}
              </StyledNavLink>
            )}
            {href && (
              <StyledNavLink
                className={`${theme}`}
                active={selected === href}
                href={href}
                disabled={disabled ?? false}
              >
                {text ?? children ?? ''}
              </StyledNavLink>
            )}
          </StyledNavItem>
        );
      })}
    </StyledNav>
  );
}
