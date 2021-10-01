import { StyledDashboardWrapper } from '@pages/Dashboard/styled';
import { HeadBlock } from '@pages/Dashboard/components/HeadBlock/HeadBlock';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { lazy } from 'react';

const Overview = lazy(() => import('./subpage/Overview'));

const Dashboard = () => {
  const { path } = useRouteMatch();
  return (
    <StyledDashboardWrapper className={'dashboard-wrapper'}>
      <HeadBlock />
      <Switch>
        <Route path={`${path}/overview`} children={<Overview />} />
        <Route path={`${path}/license`} children={<h1>License</h1>} />
        <Route path={`${path}/transactions`} children={<h1>Transactions</h1>} />
        <Route exact path="*" children={<Redirect to={`${path}/overview`} />} />
      </Switch>
    </StyledDashboardWrapper>
  );
};

export default Dashboard;
