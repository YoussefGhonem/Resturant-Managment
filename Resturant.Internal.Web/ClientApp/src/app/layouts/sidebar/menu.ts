import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [


  {
    id: 1,
    label: 'Dashboard',
    icon: 'ri-dashboard-2-line',
    subItems: [
      {
        id: 'ANALYTICS',
        label: 'ANALYTICS',
        link: '/dashboard/analytics',
        parentId: 1
      },
      {
        id: 'CRM',
        label: 'CRM',
        link: '/dashboard/crm',
        parentId: 1
      },
      {
        id: 'ECOMMERCE',
        label: 'ECOMMERCE',
        link: '/dashboard/ecommerce',
        parentId: 1
      },
      {
        id: 'CRYPTO',
        label: 'CRYPTO',
        link: '/dashboard/crypto',
        parentId: 1
      },
      {
        id: 'ROJECTS',
        label: 'ROJECTS',
        link: '/dashboard/projects',
        parentId: 1
      },
      {
        id: 'NFT',
        label: 'NFT',
        link: '/dashboard/nft',
        parentId: 1,
        badge: {
          variant: 'bg-danger',
          text: 'MENUITEMS.DASHBOARD.BADGE',
        },
      }
    ]
  },

  {
    id: 2,
    label: 'Settings',
    isTitle: true,

  },
  {
    id: 3,
    label: 'Settings',
    icon: ' ri-settings-2-line',
    link: ''
  },
  {
    id: 4,
    label: 'Countries',
    icon: 'ri-map-pin-line',
    link: '/settings/countries',
  },
  {
    id: 5,
    label: 'Event Types',
    icon: 'ri-pushpin-fill',
    link: '/events/event-types'
  },
  {
    id: 3,
    label: 'Manage Users',
    icon: ' ri-settings-2-line',
    link: '/users'
  },


  {
    id: 11,
    label: 'Members',
    icon: 'ri-team-fill',
    link: ''
  },

  {
    id: 12,
    label: 'Events',
    icon: 'ri-pushpin-fill',
    link: ''
  },

  {
    id: 13,
    label: 'Orders',
    icon: 'ri-money-dollar-circle-line',
    link: ''
  },

];
