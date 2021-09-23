export interface IRoute {
  name: string;
  path: string;
  exact?: boolean;
  link: boolean;
  bgrImg?: string;
  icon: () => JSX.Element;
  main: () => JSX.Element;
}
