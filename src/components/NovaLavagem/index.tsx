import { SideMenu } from "@/components/SideMenu";
import { MenuItem } from "@/components/SideMenu/MenuItem";
import { Flex } from "@/UI/Flex/index";
import { useTheme } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import * as S from "../../layouts/styles";
import Image from "next/image";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";

export const ServicosAtivosLayout = () => {
  const theme = useTheme();

  const router = useRouter();
  return (
      <Flex flexDirection="column" gap={theme.spacings.medium}>
        <p>Desculpe, está funcionalidade ainda não está pronta.</p>
      </Flex>
  );
};
