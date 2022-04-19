import { ReactElement } from "react";
import { useTheme } from "styled-components";
import { HomeLayout } from "layouts/Home";
import { CheckisAdmin } from "@/utils/isAdmin";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const user = session?.user || null;
  return {
    props: { user: user }, // will be passed to the page component as props
  };
}

const Home = ({ user }: { user: IUser }) => {
  const theme = useTheme();

  return <HomeLayout user={user} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Home;
