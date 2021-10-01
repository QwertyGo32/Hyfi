import React from 'react';
import { DashboardLicenseBlock } from '@pages/Dashboard/components/LicenseBlock/LicenseBlock';
import { TransactionsBlock } from '@pages/Dashboard/components/TransactionsBlock/TransactionsBlock';
import { DetailsBlock } from '@pages/Dashboard/components/DetailsBlock/DetailsBlock';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';
import AccountName from './components/AccountName';
import { accountNameData } from './components/AccountName/mockedData';
import { DataContainerData } from '@components/DataContainer/mocked';
import { StyledDashboardWrapper } from '@pages/Dashboard/styled';
import { HeadBlock } from '@pages/Dashboard/components/HeadBlock/HeadBlock';
import { GraphBlock } from '@pages/Dashboard/components/GraphBlock/GraphBlock';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

const Dashboard = () => {
  // const location = useLocation();
  // React.useEffect(() => {
  //   console.log('Location: ', location, location.hash);
  // }, [location.hash]);
  return (
    <StyledDashboardWrapper className={'dashboard-wrapper'}>
      <HeadBlock />
      <HashRouter hashType={'noslash'}>
        <Switch>
          <Route
            path="/overview"
            component={() => (
              <>
                <DashboardLicenseBlock />
                <TransactionsBlock />
                <AccountName avaliableAsset={accountNameData} />
                <DetailsBlock
                  img={CompanyLogoData[0].img}
                  title={'HyFi'}
                  listData={[
                    ...DataContainerData,
                    DataContainerData[0],
                    DataContainerData[0],
                  ]}
                />
                <GraphBlock />
              </>
            )}
          />
          <Route path="/license" component={() => <h1>License</h1>} />
          <Route path="/transactions" component={() => <h1>Transactions</h1>} />
          <Route path="*" render={() => <Redirect to="/overview" />} />
        </Switch>
      </HashRouter>
      {/* <Switch location={location}>
        {routes[type].map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch> */}
    </StyledDashboardWrapper>
  );
};

export default Dashboard;
