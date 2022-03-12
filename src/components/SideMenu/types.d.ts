interface MenuItemAttributes {
  label: string
  pathname: string
  query?: { [key: string]: string }
  as?: string
  icon?: JSX.Element
  // action?: () => void
  isActive?: boolean
}
