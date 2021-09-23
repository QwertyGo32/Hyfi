import { Switch, Route, useLocation } from 'react-router-dom';
import LoggedRouter from '@layouts/Auth/LoggedRouter';
import Counter from '@pages/counter';
import Login from '@pages/login';
import Main from '@pages/main';
import Ilo from '@pages/ilo';

import Sidebar from '@components/Sidebar';
import Report from "@pages/Report"
import HomePage from "@pages/HomePage/HomePage";
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
import reportBgrImg from '@img/report_bgr.jpg';
import React from "react";
import { LinksEnum } from './interfaces/LinksEnum';
export default function App() {
  const [type,setType]=React.useState<"public"|"private">("private")
  const location = useLocation();
  const routes = {
    public: [
      {
        name: 'Home',
        path: LinksEnum.MAIN,
        exact: true,
        link: true,
        icon: () => <Home />,
        main: () => <Main/>,
      },
      // {
      //   name: 'Counter',
      //   path: '/counter',
      //   link: true,
      //   icon: () => <Home />,
      //   main: () => <LoggedRouter component={Counter} />,
      // },
      {
        name: 'Login',
        path: '/login',
        link: true,
        icon: () => <Overview />,
        main: () => <Login />,
      },
      {
        name: 'Not Match',
        path: LinksEnum.NOTFOUND,
        link: false,
        icon: () => <Overview />,
        main: () => <h2>Not Match</h2>,
      },
    ] as IRoute[],
    private: [
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
        name: 'Report',
        path: LinksEnum.REPORT,
        exact: true,
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
        name: 'Initial Offerings',
        path: LinksEnum.ILO,
        link: true,
        icon: () => <Chain />,
        main: () => <Ilo/>,
      },
      {
        name: 'Overview',
        path: LinksEnum.OVERVIEW,
        link: true,
        icon: () => <Overview />,
        main: () => <h2>Overview</h2>,
      },
      {
        name: 'Swap',
        path:  LinksEnum.SWAP,
        link: true,
        icon: () => <Swap />,
        main: () => <h2>Swap</h2>,
      },

      {
        name: 'Farms',
        path:LinksEnum.FARMS,
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
    ] as IRoute[],
  };
  return (
    <>
    <Sidebar routes={routes[type]}>
    <SwitchTransition mode="out-in">
      <CSSTransition key={location.pathname} classNames="my-node" timeout={300}>
        <Switch location={location}>
          {routes[type].map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main  />}
            />
          ))}
        </Switch>
      </CSSTransition>
    </SwitchTransition>
  </Sidebar>
  </>
  );
}
