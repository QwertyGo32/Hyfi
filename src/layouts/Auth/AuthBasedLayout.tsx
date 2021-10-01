import { UserStatusType } from '@/interfaces/IUser';
import { useAppSelector } from '@/utils/hooks';
import { userLoggedStatus } from '@redux/auth';
import React from 'react';

const withAuthType =
  (userType: `${UserStatusType}`[]) =>
  (Component: React.Component) =>
  (props: unknown) => {
    const currentAuthStatus = useAppSelector(userLoggedStatus);
    if (userType.includes(currentAuthStatus)) {
      return <Component {...props} />;
    }
    return null;
    // if (userRoles.match(roles)) {
    //     return <Component {props} />
    //    }
    //    return null
  };

export default withAuthType;
