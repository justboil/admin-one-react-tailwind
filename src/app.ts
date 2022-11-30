import { appTitle } from './config'

export const getPageTitle = (currentPageTitle: string) => `${currentPageTitle} — ${appTitle}`
