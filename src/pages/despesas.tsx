import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "@/types/next-page";
import { useTheme } from "styled-components";
import { Divider } from "@/components/Divider";
import { AdminLayout } from "layouts/Admin";
import { ExpenditureForm } from "@/components/ExpenditureForm";
import { Flex } from "@/UI/Flex";
import { CheckisAdmin } from "@/utils/isAdmin";

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
    props: {}, // will be passed to the page component as props
  };
}

const Despesas: NextPageWithLayout = () => {
  const theme = useTheme();

  return (
    <AdminLayout
      header={
        <>
          {
            <Flex flexDirection="column" gap="0.8rem">
              <h2>Cadastrar despesas</h2>
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
      <ExpenditureForm />
    </AdminLayout>
  );
};

Despesas.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Despesas;
