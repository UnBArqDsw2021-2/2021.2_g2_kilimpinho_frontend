import React from 'react';
import { Flex } from 'reflexbox';
import Image from 'next/image';
import * as S from './styles';
import { Divider } from '@/components/Divider';
import { useSession } from 'next-auth/react';

export interface MenuProps {
  children: string[] | JSX.Element[];
}

export const SideMenu = ({ children }: MenuProps) => {
  const { data: session } = useSession();

  return (
    <S.MenuWrapper>
      <Flex>
        <Image
          src="/imgs/logo.svg"
          width="60px"
          height="60px"
          layout="fixed"
        ></Image>
      </Flex>
      <Divider marginBottom="1rem" />
      <Flex flexDirection="column" paddingBottom="1rem" height="fit-content">
        {children}
      </Flex>
      <Divider marginBottom="1rem" />
      <strong>{session?.user?.name}</strong>
    </S.MenuWrapper>
  );
};
