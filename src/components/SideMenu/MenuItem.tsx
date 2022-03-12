import { Url } from 'url';

import React, { ReactElement, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';
export interface MenuItemProps extends Partial<MenuItemAttributes> {
  children: string | ReactElement;
}

export const MenuItem = ({
  pathname,
  query,
  as,
  children,
  icon,
}: MenuItemProps) => {
  const router = useRouter();
  const href: Partial<Url> = useMemo(
    () => ({
      pathname,
      query,
    }),
    [pathname, query]
  );

  // replace the pathname slug '/path/[slug]' with the actual slug
  const path = query
    ? pathname?.replace(`[${Object.keys(query)[0]}]`, Object.values(query)[0])
    : pathname;
  return React.Children.map(children, (child) => {
    return (
      <Link href={href} as={as} shallow={!pathname}>
        <S.SideMenuItem isActive={router?.asPath === path}>
          {icon}
          {child}
        </S.SideMenuItem>
      </Link>
    );
  })[0];
};
