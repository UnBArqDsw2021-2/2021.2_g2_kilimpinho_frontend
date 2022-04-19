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
        <>
          {
            <Flex flexDirection="column" style={{ gap: '0.8rem' }}>
              <h2>Serviços</h2>
            </Flex>
          }
          
          <Divider
            color={theme.colors.lightGray}
            marginTop="1rem"
            marginBottom="1rem"
            height={1}
          ></Divider>
          <ServicosLayout/>

          <Flex flexDirection="column" style={{ gap: '0.8rem' }} marginTop="2rem">
              <h2>Ativos</h2>
            </Flex>

          <Divider
            color={theme.colors.lightGray}
            marginTop="1rem"
            marginBottom="1rem"
            height={1}
          ></Divider>  
            <ServicosAtivosLayout/>
        </>
      }
    >
      
    </UserLayout>
    
  );
};

User.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default User;
