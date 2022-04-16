import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { BaseLayout } from "layouts/Base";
import { ProfileForm } from "@/components/ProfileForm";
import { Flex } from "@/UI/Flex";
import { useTheme } from "styled-components";
import { Divider } from "@/components/Divider";
import { CheckisAdmin } from "@/utils/isAdmin";
import { AdminLayout } from "layouts/Admin";

interface ConfiguracoesProps {
  isAdmin: boolean;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const isAdmin = await CheckisAdmin(context);

  if (!isAdmin) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { isAdmin }, // will be passed to the page component as props
  };
}

const Configuracoes = ({ isAdmin }: ConfiguracoesProps) => {
  const theme = useTheme();
  if (isAdmin) {
    return (
      <AdminLayout
        header={
          <>
            {
              <Flex flexDirection="column" style={{ gap: "0.8rem" }}>
                <h2>Alterar dados</h2>
              </Flex>
            }
            <Divider
              color={theme.colors.lightGray}
              marginTop="1rem"
              height={1}
            ></Divider>
          </>
        }
      >
        <ProfileForm />
      </AdminLayout>
    );
  }
  return (
    <BaseLayout
      header={
        <>
          {
            <Flex flexDirection="column" style={{ gap: "0.8rem" }}>
              <h2>Alterar dados</h2>
            </Flex>
          }
          <Divider
            color={theme.colors.lightGray}
            marginTop="1rem"
            height={1}
          ></Divider>
        </>
      }
    >
      <ProfileForm />
    </BaseLayout>
  );
};

Configuracoes.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Configuracoes;
