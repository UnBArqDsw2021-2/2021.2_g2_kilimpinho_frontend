import React from "react";
import { Flex } from "@/UI/Flex";
import Image from "next/image";
import * as S from "./styles";
import { Divider } from "@/components/Divider";
import { signOut, useSession } from "next-auth/react";
import { IoMdExit } from "react-icons/io";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import { Box } from "reflexbox";
export interface MenuProps {
  children: string[] | JSX.Element[];
}

export const SideMenu = ({ children }: MenuProps) => {
  const { data: session } = useSession();
  const router = useRouter();
  const theme = useTheme();
  return (
    <S.MenuWrapper>
      <Flex>
        <Box onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
          <Image
            src="/imgs/logo.svg"
            width="60px"
            height="60px"
            layout="fixed"
          />
        </Box>
      </Flex>
      <Divider marginBottom="1rem" />
      <Flex flexDirection="column" paddingBottom="1rem" height="fit-content">
        {children}
      </Flex>
      <Divider marginBottom="0.3rem" />
      <strong>{session?.user?.name}</strong>{" "}
      <Flex
        alignItems="center"
        gap={theme.spacings.tiny}
        onClick={() => signOut().then(() => router.push("/"))}
        cursor="pointer"
      >
        <p>Sair</p>
        <IoMdExit color={theme.colors.secondary} size={22} />
      </Flex>
    </S.MenuWrapper>
  );
};
