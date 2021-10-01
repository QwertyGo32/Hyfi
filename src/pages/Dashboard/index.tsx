import { StyledDashboardWrapper } from '@pages/Dashboard/styled';
import { HeadBlock } from '@pages/Dashboard/components/HeadBlock/HeadBlock';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import { useQuery } from '@/utils/hooks';
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
} from 'react-transition-group';

const Overview = lazy(() => import('./subpage/Overview'));

const Dashboard = () => {
  const query = useQuery();
  const key = query?.get('tab') ?? '';

  return (
    <StyledDashboardWrapper className={'dashboard-wrapper'}>
      <HeadBlock />
      <CSSTransition key={key} classNames="my-node" timeout={300}>
        {{
          overview: <Overview />,
          license: <h1>License</h1>,
          transactions: <h1>Transactions</h1>,
        }[key] ?? <Redirect to="/?tab=overview" />}
      </CSSTransition>
    </StyledDashboardWrapper>
  );
};

export default Dashboard;
