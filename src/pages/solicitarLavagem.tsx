import { ReactElement, useState } from "react";
import { UserLayout } from "layouts/User";
import { NextPageWithLayout } from "@/types/next-page";
import { Flex } from "reflexbox";
import { useTheme } from "styled-components";
import { Divider } from "@/components/Divider";
import { LavagemForm } from "@/components/LavagemForm";

const User: NextPageWithLayout = () => {
  const theme = useTheme();

  return (
    <UserLayout
      header={
        <>
          {
            <Flex flexDirection="column" style={{ gap: '0.8rem' }}>
              <h2>Nova lavagem</h2>
            </Flex>
          }
          
          <Divider
            color={theme.colors.lightGray}
            marginTop="1rem"
            marginBottom="1rem"
            height={1}
          ></Divider>
            
        </>
      }
    >
      <LavagemForm/>
    </UserLayout>
    
  );
};

User.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default User;
