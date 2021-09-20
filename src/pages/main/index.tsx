import Tabs, { INavItemList } from '@components/Tabs';
export default function Main() {
  const navList: INavItemList[] = [
    { text: 'Hello', key: 1 },
    { text: 'Hello', key: 2 },
  ];
  return (
    <div>
      <h1>Main page</h1>
      <Tabs
        navList={navList}
        onSelect={(eventKey) => {
          console.log('Test: ', eventKey);
        }}
      />
    </div>
  );
}
