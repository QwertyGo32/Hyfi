import { Switch, Route, useLocation } from 'react-router-dom';
import LoggedRouter from '@layouts/Auth/LoggedRouter';

import React, { Suspense } from 'react';

import Sidebar from '@components/Sidebar';
import { IRoute } from '@interfaces/IRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { ReactComponent as Home } from '@icons/home.svg';
import { ReactComponent as Pools } from '@icons/pools.svg';
import { ReactComponent as Chain } from '@icons/chain.svg';
import { ReactComponent as Overview } from '@icons/overview.svg';
import { ReactComponent as Swap } from '@icons/vice-verse_arrows.svg';
import { ReactComponent as Tractor } from '@icons/tractor.svg';
import homeBgrImg from '@img/infographic9.jpg';
import { LinksEnum } from '@interfaces/LinksEnum';
import { userLoggedStatus } from '@redux/auth';
import { useAppSelector } from '@utils/hooks';
import { UserStatusType } from '@interfaces/IUser';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@layouts/Fallback';
import { StyledContainer } from '@styles/containers.styled';

const Counter = React.lazy(() => import('@pages/counter'));
const Login = React.lazy(() => import('@pages/login'));
const Main = React.lazy(() => import('@pages/main'));
const Ilo = React.lazy(() => import('@pages/ilo'));
const Report = React.lazy(() => import('@pages/Report'));
const HomePage = React.lazy(() => import('@pages/HomePage/HomePage'));
const Dashboard = React.lazy(() => import('@pages/Dashboard'));
const HowToTakePart = React.lazy(() => import('@pages/HowToTakePart'));

export default function App() {
  const type = useAppSelector(userLoggedStatus);
  const location = useLocation();
  const routes: {
    [UserStatusType.VISITOR]: IRoute[];
    [UserStatusType.AUTHED]: IRoute[];
  } = {
    [UserStatusType.VISITOR]: [
      {
        name: 'Home',
        path: LinksEnum.MAIN,
        exact: true,
        link: true,
        bgrImg: homeBgrImg,
        icon: () => <Home />,
        main: () => <HomePage />,
      },
      {
        name: 'NFT Offers',
        path: LinksEnum.ILO,
        link: true,
        icon: () => <Chain />,
        main: () => <h2>Initial Offerings for unauthorized</h2>,
      },
      {
        name: 'Report',
        path: LinksEnum.REPORT,
        exact: true,
        link: false,
        main: () => <Report />,
      },
      {
        name: 'Pools',
        path: LinksEnum.POOLS,
        link: true,
        icon: () => <Pools />,
        main: () => <h2>Pools for unauthorized</h2>,
      },

      {
        name: 'Overview',
        path: LinksEnum.OVERVIEW,
        link: true,
        icon: () => <Overview />,
        main: () => <h2>Overview for unauthorized</h2>,
      },
      {
        name: 'Swap',
        path: LinksEnum.SWAP,
        link: true,
        icon: () => <Swap />,
        main: () => <h2>Swap for unauthorized</h2>,
      },

      {
        name: 'Farms',
        path: LinksEnum.FARMS,
        link: true,
        icon: () => <Tractor />,
        main: () => <h2>Farms for unauthorized</h2>,
      },
      {
        name: 'Not Match',
        path: LinksEnum.NOTFOUND,
        link: false,
        icon: () => <Overview />,
        main: () => <h2>Not Match</h2>,
      },
    ],
    [UserStatusType.AUTHED]: [
      {
        name: 'Home',
        path: LinksEnum.MAIN,
        exact: true,
        link: true,
        // bgrImg: homeBgrImg,
        icon: () => <Home />,
        main: () => <Dashboard />,
        // main: () => <HomePage />,
      },
      {
        name: 'NFT Offers',
        path: LinksEnum.ILO,
        link: true,
        icon: () => <Chain />,
        main: () => (
          <StyledContainer>
            <Ilo />
            <HowToTakePart />
          </StyledContainer>
        ),
      },
      {
        name: 'Report',
        path: LinksEnum.REPORT,
        exact: true,
        link: false,
        main: () => <Report />,
      },
      // {
      //   name: 'Counter',
      //   path: '/counter',
      //   link: true,
      //   main: () => <LoggedRouter component={Counter} />,
      // },
      {
        name: 'Pools',
        path: LinksEnum.POOLS,
        link: true,
        icon: () => <Pools />,
        main: () => <h2>Pools</h2>,
      },

      {
        name: 'Overview',
        path: LinksEnum.OVERVIEW,
        link: true,
        icon: () => <Overview />,
        // main: () => <HowToTakePart />,
        main: () => <h2>Overview</h2>,
      },
      {
        name: 'Swap',
        path: LinksEnum.SWAP,
        link: true,
        icon: () => <Swap />,
        main: () => <h2>Swap</h2>,
      },

      {
        name: 'Farms',
        path: LinksEnum.FARMS,
        link: true,
        icon: () => <Tractor />,
        main: () => <h2>Farms</h2>,
      },
      // {
      //   name: 'Login',
      //   path: '/login',
      //   link: true,
      //   icon: () => <Overview />,
      //   main: () => <Login />,
      // },
      {
        name: 'Not Match',
        path: LinksEnum.NOTFOUND,
        link: false,
        icon: () => <Overview />,
        main: () => <h2>Not Match</h2>,
      },
    ],
  };
  return (
    <>
      <Sidebar routes={routes[type]}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.pathname}
            classNames="my-node"
            timeout={300}
          >
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch location={location}>
                  {routes[type].map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.main />}
                    />
                  ))}
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </CSSTransition>
        </SwitchTransition>
      </Sidebar>
    </>
  );
}
