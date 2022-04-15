import { ReactElement, useCallback, useState } from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticProps,
} from "next";
import { BaseLayout } from "layouts/Base";
import { NextPageWithLayout } from "@/types/next-page";
import { ProfileForm } from "@/components/ProfileForm";
import { useTheme } from "styled-components";
import { Divider } from "@/components/Divider";
import { AdminLayout } from "layouts/Admin";
import { ExpenditureForm } from "@/components/ExpenditureForm";
import { Flex } from "@/UI/Flex";
import { getSession } from "next-auth/react";
import { CheckisAdmin } from "@/utils/isAdmin";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const isAdmin = CheckisAdmin(context);

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

const Auth: NextPageWithLayout = () => {
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

Auth.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Auth;
