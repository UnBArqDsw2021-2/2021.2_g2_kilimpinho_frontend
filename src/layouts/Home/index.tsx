import { SideMenu } from "@/components/SideMenu";
import { MenuItem } from "@/components/SideMenu/MenuItem";
import { Flex } from "@/UI/Flex/index";
import { useTheme } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import * as S from "../styles";
import Image from "next/image";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";

export const HomeLayout = () => {
  const theme = useTheme();

  const router = useRouter();
  return (
    <S.LayoutContainer>
      <SideMenu>
        <MenuItem pathname="/" icon={<AiOutlineHome />}>
          Home
        </MenuItem>
        <MenuItem pathname="/sobre" icon={<MdOutlineDashboard />}>
          Sobre
        </MenuItem>
        <MenuItem pathname="/login" icon={<BsBoxArrowInRight />}>
          Login
        </MenuItem>
        <MenuItem pathname="/cadastro" icon={<BsBoxArrowInRight />}>
          Cadastro
        </MenuItem>
      </SideMenu>
      <Flex flexDirection="column">
        <S.TopContainer>
          <Flex flexDirection="column" gap={theme.spacings.medium}>
            <h1>LAVE O SEU CARRO AGORA</h1>
            <p>
              Deixa de estresse, com a Ki-limpinho você sai de casa com horário
              marcado no lava-jato mais próximo de você
            </p>

            <Button color="secondary" onClick={() => router.push("/cadastro")}>
              CADASTRE-SE
            </Button>
          </Flex>
          <Image
            src="/imgs/group.svg"
            width={200}
            height={200}
            layout="fixed"
          />
        </S.TopContainer>
        <S.BottomContainer>
          <Flex flexDirection="column" gap={theme.spacings.small}>
            <h3>Em breve versão mobile</h3>

            <Flex gap={theme.spacings.small} alignItems="center">
              <Image
                src="/imgs/logo-apple.svg"
                width={40}
                height={40}
                layout="fixed"
              />
              <h4>Apple store</h4>
            </Flex>
            <Flex gap={theme.spacings.small} alignItems="center">
              <Image
                src="/imgs/logo-play-store.svg"
                width={40}
                height={40}
                layout="fixed"
              />
              <h4>Apple store</h4>
            </Flex>
          </Flex>
          <Image
            src="/imgs/mobile.svg"
            width={400}
            height={400}
            layout="fixed"
          />
        </S.BottomContainer>
      </Flex>
    </S.LayoutContainer>
  );
};
