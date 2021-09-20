export interface IRoute {
  name: string;
  path: string;
  exact?: boolean;
  link: boolean;
  icon: () => JSX.Element;
  main: () => JSX.Element;
}
