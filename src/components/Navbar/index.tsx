import React from 'react';
import { IRoute } from '@/interfaces/IRoutes';
import {
  StyledCheckbox,
  StyledLogo,
  StyledHeader,
  StyledSidebarBtn,
  StyledOrverlay,
  StyledBtnContainer,
  StyledWalletIcon,
} from './styled';
import { Link } from 'react-router-dom';
import Wallet, { IWalletDropdownBtn } from '@components/Wallet';
import { ReactComponent as WalletIcon } from '@icons/wallet.svg';
import { ReactComponent as LogOut } from '@icons/log-out.svg';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { userLoggedStatus } from '@redux/auth';
import { UserStatusType } from '@/interfaces/IUser';
import Btn, { gradientBtnTypes } from '@components/Btn';
import { openChangeWallet, openConnectWallet } from '@redux/modal';
import { logoutUserFromWebSite } from '@redux/auth';
import AccountDetails from '@components/AccountDetails';
import ConnectWallet from '@components/ConnectWallet';

type NavbarProps = {
  route: IRoute;
};

export default function Navbar({ route }: NavbarProps) {
  const dispatch = useAppDispatch();
  const status = useAppSelector(userLoggedStatus);
  const [isShown, setIsShown] = useState(false);
  const dataArray: IWalletDropdownBtn[] = [
    {
      text: 'Wallet',
      key: '#/action-1',
      icon: <WalletIcon />,
      toDo: () => {
        dispatch(openChangeWallet(true));
      },
    },
    {
      text: 'Disconnect',
      key: '#/action-2',
      icon: <LogOut />,
      toDo: () => {
        dispatch(logoutUserFromWebSite());
      },
    },
  ];
  return (
    <>
      <StyledCheckbox type="checkbox" name="checkbox" id="checkbox" />
      <StyledHeader id="header" data-status={status}>
        <div>
          <Link to={route.path}>
            <StyledLogo />
          </Link>
        </div>
        <label htmlFor="checkbox" className="check-box">
          <StyledSidebarBtn id="sidebar-logo" />
        </label>
        {
          {
            [UserStatusType.AUTHED]: (
              <Wallet
                open={isShown}
                changeOpenState={setIsShown}
                walletTabs={dataArray}
              />
            ),
            [UserStatusType.VISITOR]: (
              <StyledBtnContainer>
                <Btn
                  className="home-page_btn"
                  theme={gradientBtnTypes.gradient}
                  onClick={() => {
                    dispatch(openConnectWallet(true));
                  }}
                >
                  <span>Connect Wallet</span>
                  <div className="wallet-container">
                    <StyledWalletIcon />
                  </div>
                </Btn>
              </StyledBtnContainer>
            ),
          }[status]
        }
      </StyledHeader>
      <StyledOrverlay
        onClick={() => {
          setIsShown(false);
        }}
        className={isShown ? 'active' : ''}
      />
      <AccountDetails />
      <ConnectWallet />
    </>
  );
}
