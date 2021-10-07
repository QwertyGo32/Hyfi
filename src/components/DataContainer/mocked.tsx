import { DataContainerListType } from '.';

export const DataContainerData = [
  {
    title: 'Soft Cap',
    value: <span>Test</span>,
    badge:
      'Nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie',
    type: DataContainerListType.BADGE,
  },
  {
    title: 'Total Commited',
    value: `$${(2000000).toLocaleString('EN-gb')}`,
    type: DataContainerListType.GENERAL,
  },
  {
    title: 'Participants',
    value: 200000,
    type: DataContainerListType.GENERAL,
  },
  {
    title: 'Hard Cap',
    value: `$${(2000000000).toLocaleString('EN-gb')}`,
    badge:
      'Nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie',
    type: DataContainerListType.BADGE,
  },
  {
    title: 'ROI',
    value: '',
    badge:
      'Nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie',
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
