import { UserStatusType } from '@/interfaces/IUser';
import { useAppSelector } from '@/utils/hooks';
import { userLoggedStatus } from '@redux/auth';
import React from 'react';

const withAuthType =
  (userType: `${UserStatusType}`[]) =>
  (Component: React.ElementType) =>
  (props: unknown) => {
    if (!Component || userType?.length === 0) return null;

    const currentAuthStatus = useAppSelector(userLoggedStatus);
    if (userType.includes(currentAuthStatus)) {
      return <Component {...props} />;
    }
    return null;
  };

export default withAuthType;
