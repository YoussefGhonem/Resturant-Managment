import { RolesEnum } from 'app/+auth/models';
import { MenuItem } from './menu.model';


function role(role: RolesEnum): string {
  return RolesEnum[role];
}
export const MENU: MenuItem[] = [
  {
    id: 1,
    roles: [role(RolesEnum.SuperAdmin)],
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
    roles: [role(RolesEnum.SuperAdmin)]

  },
  {
    id: 3,
    label: 'Settings',
    icon: ' ri-settings-2-line',
    link: '/settings/application-settings',
    roles: [role(RolesEnum.SuperAdmin)]

  },
  {
    id: 4,
    label: 'Countries',
    icon: 'ri-map-pin-line',
    link: '/settings/countries',
    roles: [role(RolesEnum.SuperAdmin)]

  },
  {
    id: 5,
    label: 'Event Types',
    icon: 'ri-pushpin-fill',
    link: '/events/event-types',
    roles: [role(RolesEnum.SuperAdmin)]

  },
  {
    id: 6,
    label: 'Users',
    icon: ' ri-settings-2-line',
    link: '/users',
    roles: [role(RolesEnum.SuperAdmin)]

  },


  {
    id: 7,
    label: 'Members',
    icon: 'ri-team-fill',
    link: ''
  },

  {
    id: 8,
    label: 'Events',
    icon: 'ri-pushpin-fill',
    link: ''
  },

  {
    id: 9,
    label: 'Orders',
    icon: 'ri-money-dollar-circle-line',
    link: ''
  },

];
