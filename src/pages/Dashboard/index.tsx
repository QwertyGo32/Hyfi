import { StyledDashboardWrapper } from '@pages/Dashboard/styled';
import { HeadBlock } from '@pages/Dashboard/components/HeadBlock/HeadBlock';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { lazy } from 'react';

const Overview = lazy(() => import('./subpage/Overview'));
export enum EDashboardPageTabs {
  OVERVIEW = 'overview',
  LICENSE = 'license',
  TRANSACTIONS = 'transactions',
}

const Dashboard = () => {
  const { path } = useRouteMatch();
  return (
    <StyledDashboardWrapper className={'dashboard-wrapper'}>
      <HeadBlock />
      <Switch>
        <Route
          path={`${path}/${EDashboardPageTabs.OVERVIEW}`}
          children={<Overview />}
        />
        <Route
          path={`${path}/${EDashboardPageTabs.LICENSE}`}
          children={<h1>License</h1>}
        />
        <Route
          path={`${path}/${EDashboardPageTabs.TRANSACTIONS}`}
          children={<h1>Transactions</h1>}
        />
        {/* <Route
          exact
          path="*"
          children={<Redirect to={`${path}/${EDashboardPageTabs.OVERVIEW}`} />}
        /> */}
      </Switch>
    </StyledDashboardWrapper>
  );
};

export default Dashboard;
