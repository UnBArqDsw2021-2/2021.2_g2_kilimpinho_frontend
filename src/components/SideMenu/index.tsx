import React from 'react';
import { Flex } from 'reflexbox';
import Image from 'next/image';
import * as S from './styles';
import { Divider } from '@/components/Divider';

export interface MenuProps {
  children: string[] | JSX.Element[];
}

export const SideMenu = ({ children }: MenuProps) => {
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
      <Flex flexDirection="column" paddingBottom="1rem">
        {children}
      </Flex>
      <Divider marginBottom="1rem" />
    </S.MenuWrapper>
  );
};
