import { ReactElement, useState } from "react";
import { UserLayout } from "layouts/User";
import { NextPageWithLayout } from "@/types/next-page";
import { Flex } from "reflexbox";
import { useTheme } from "styled-components";
import { Divider } from "@/components/Divider";
import { ServicosLayout } from "@/components/Servico";
import { ServicosAtivosLayout } from "@/components/ServicosAtivos";

const User: NextPageWithLayout = () => {
  const theme = useTheme();

  return (
    <UserLayout
    header={
      <Flex flexDirection="column" gap={theme.spacings.medium}>
        <h2>Fale conosco!</h2>
        <p>Desculpe, mas está funcionalidade ainda não está pronta.</p>
      </Flex>
    }>
      
    </UserLayout>
  );
};


User.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default User;
