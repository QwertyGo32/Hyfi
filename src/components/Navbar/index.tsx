import React from 'react';
import { IRoute } from '@/interfaces/IRoutes';
import {
  StyledCheckbox,
  StyledLogo,
  StyledHeader,
  StyledSidebarBtn,
  StyledOrverlay,
} from './styled';
import { Link } from 'react-router-dom';
import Wallet, { IWalletDropdownBtn } from '@components/Wallet';
import { ReactComponent as WalletIcon } from '@icons/wallet.svg';
import { ReactComponent as LogOut } from '@icons/log-out.svg';
import { useState } from 'react';

type NavbarProps = {
  route: IRoute,
};
const dataArray: IWalletDropdownBtn[] = [
  {
    text: 'Wallet',
    href: '#/action-1',
    icon: <WalletIcon />,
  },
  {
    text: 'Disconnect',
    href: '#/action-2',
    icon: <LogOut />,
  },
];

export default function Navbar({ route }: NavbarProps) {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <StyledCheckbox type="checkbox" name="checkbox" id="checkbox" />
      <StyledHeader id="header">
        <div>
          <Link to={route.path}>
            <StyledLogo />
          </Link>
        </div>
        <label htmlFor="checkbox" className="check-box">
          <StyledSidebarBtn id="sidebar-logo" />
        </label>
        <Wallet
          open={isShown}
          changeOpenState={setIsShown}
          walletTabs={dataArray}
        />
      </StyledHeader>
      <StyledOrverlay
        onClick={() => {
          setIsShown(false);
        }}
        className={isShown ? 'active' : ''}
      />
    </>
  );
}
