import React, {  useState } from 'react';
import {
  StyledWalletContainer,
  StyledWalletIcon,
  StyledWalletIconContainer,
  StyledWalletData,
  StyledArrow,
  StyledMenuBtn,
  StyledMenu,
} from './styled';
import Dropdown from 'react-bootstrap/Dropdown';

interface IForwardedRef {
  children?: React.ReactNode;
  onClick?: (event: React.SyntheticEvent) => void;
}

const CustomToggle = React.forwardRef<HTMLDivElement>(
  ({ children, onClick, ...props }: IForwardedRef, ref) => {
    return (
      <StyledWalletContainer
        ref={ref}
        onClick={(event) => {
          event.preventDefault();
          if (typeof onClick === 'function') onClick(event);
        }}
        {...props}
      >
        <StyledWalletIconContainer>
          <StyledWalletIcon />
        </StyledWalletIconContainer>
        <StyledWalletData>{children}</StyledWalletData>
        <StyledArrow className="dropdown-arrow" />
      </StyledWalletContainer>
    );
  }
);

export interface IWalletDropdownBtn {
  children?: React.ReactNode;
  key?: string | number;
  href?: string;
  text?: string;
  disabled?: boolean;
  icon?: JSX.Element;
}

export interface IWalletProps {
  open: boolean;
  walletTabs: IWalletDropdownBtn[];
  [key:string]:any;
}

export default function Wallet({
  open=false,
  walletTabs,
  changeOpenState=()=>{},
}: IWalletProps) {
  const [active, setActive] = useState('');

  const onSelectFunction = function (eventKey: unknown) {
    const newKey=eventKey as string;
    setActive(newKey);
  };

  const changeShowValue = function () {
    console.log('CHANGE VISIBILITY: ', open);
    changeOpenState(!open);
  };

  return (
    <Dropdown show={open} autoClose="outside" onSelect={onSelectFunction}>
      <Dropdown.Toggle
        onClick={changeShowValue}
        as={CustomToggle}
        id="dropdown-custom-components"
      >
        0xaEe767422937b9a662eAA2178710D3f10c5B01cD
      </Dropdown.Toggle>
      <Dropdown.Menu renderOnMount align="end" as={StyledMenu}>
        {walletTabs.map(({ children, key, href, text, disabled, icon }) => {
          return (
            <>
              {href && (
                <Dropdown.Item
                  key={key}
                  as={StyledMenuBtn}
                  active={active === href}
                  href={href}
                  disabled={disabled ?? false}
                >
                  <span>{text ?? children ?? ''}</span>
                  {icon && React.cloneElement(icon)}
                </Dropdown.Item>
              )}
              {key && (
                <Dropdown.Item
                  key={key}
                  as={StyledMenuBtn}
                  active={active === key}
                  eventKey={key}
                  disabled={disabled ?? false}
                >
                  <span>{text ?? children ?? ''}</span>
                  {icon && React.cloneElement(icon)}
                </Dropdown.Item>
              )}
            </>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
