import { DataContainerListType } from '.';

export const DataContainerData = [
  {
    title: 'Soft Cap',
    value: <span>Test</span>,
    type: DataContainerListType.GENERAL,
  },
  {
    title: 'Total Commited',
    value: `$${(2000000).toLocaleString('EN-gb')}`,
    type: DataContainerListType.GENERAL,
  },
  {
    title: 'Participants',
    value: 200000,
    badge: 'Hello',
    type: DataContainerListType.BADGE,
  },
  {
    title: 'Hard Cap',
    value: `$${(2000000000).toLocaleString('EN-gb')}`,
    type: DataContainerListType.GENERAL,
  },
  {
    title: 'ROI',
    value: '',
    badge:
      'Nisl tincidunt eget nullam non nisi est sit amet facilisis\n' +
      '                        magna etiam tempor orci eu lobortis elementum nibh tellus\n' +
      '                        molestie',
    type: DataContainerListType.BADGE,
  },
];

export const TitleContainerData = [
  {
    title: 'One Page Info',
    type: DataContainerListType.SHARE,
  },
  {
    title: 'Link to License',
    type: DataContainerListType.SHARE,
  },
  {
    title: 'View Contract',
    type: DataContainerListType.SHARE,
  },
];
