export enum UserStatusType{
  AUTHED="auth",
  VISITOR="visitor"
}

export interface IUser {
  accountName: string;
  status:`${UserStatusType}`
}
