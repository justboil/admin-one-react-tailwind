import { mdiMonitor, mdiTextBoxEditOutline, mdiFolderAccount } from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    href: '/sendsms',
    label: 'Send Sms',
    icon: mdiTextBoxEditOutline,
  },
  {
    href: '/contacts',
    label: 'Contacts',
    icon: mdiFolderAccount,
  },
]

export default menuAside
