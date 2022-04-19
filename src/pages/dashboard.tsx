import { ReactElement, useCallback, useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "@/types/next-page";
import { useTheme } from "styled-components";
import { Divider } from "@/components/Divider";
import { AdminLayout } from "layouts/Admin";
import { Flex } from "@/UI/Flex";
import { CheckisAdmin } from "@/utils/isAdmin";
import { Chart } from "@/components/Chart";
import { getExpenditures } from "@/services/expenditureService";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import { useChart, ChartProvider } from "@/contexts/ChartContext";

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

const Auth: NextPageWithLayout = () => {
  const router = useRouter();
  const theme = useTheme();

  const { chartData, labels, currentView } = useChart();

  return (
    <AdminLayout
      header={
        <>
          {
            <Flex flexDirection="column" gap="0.8rem">
              {currentView !== "all" ? (
                <h2>{currentView}</h2>
              ) : (
                <h2>Resultado(mês)</h2>
              )}
            </Flex>
          }
          <Divider color={theme.colors.lightGray} marginTop="1rem" height={1} />
        </>
      }
    >
      <Flex flexDirection="column" gap={theme.spacings.medium}>
        <Chart chartData={chartData} labels={labels} />

        <Button onClick={() => router.push("/despesas")}>
          Cadastrar despesa
        </Button>
      </Flex>
    </AdminLayout>
  );
};

Auth.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Auth;
