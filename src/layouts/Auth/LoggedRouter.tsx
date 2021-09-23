import React from 'react';
import ProtectedRoute from './ProtectedRouter';
import { useAppSelector } from '@utils/hooks';
import { authSelectorState } from '@redux/auth';
import { RouteProps } from 'react-router';

export default function LoggedRouter({ ...props }: RouteProps) {
  // const {
  //   pending,
  //   error,
  //   data: { isAuth },
  // } = useAppSelector(authSelectorState);
  // return (
  //   <ProtectedRoute
  //     isAuthenticated={isAuth || false}
  //     authenticationPath="/login"
  //     {...props}
  //   />
  // );
}
