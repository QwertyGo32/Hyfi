import { PropsWithChildren, useEffect, Component } from 'react';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import {
  loginUserToWebSite,
  logoutUserFromWebSite,
  selectAuth,
} from '@redux/auth';
import { persistor } from '@redux/index';
interface IAuthLayoutProps {
  children: JSX.Element;
}
export default function AuthLayoutBlock({ children }: IAuthLayoutProps) {
  const dispatch = useAppDispatch();
  const {
    pending,
    data,
    // data: { isAuth },
  } = useAppSelector(selectAuth);

  //   const loginFunction = function () {
  //     dispatch(loginUserToWebSite());
  //   };
  //   const logoutFunction = function () {
  //     persistor.purge();
  //     dispatch(logoutUserFromWebSite());
  //   };

  useEffect(() => {
    console.log('AUTH LAYOUT', data);
    //   dispatch(loginUserToWebSite());
  }, []);

  if (pending) {
    return <h1>Loading</h1>;
  }

  return children;
}
