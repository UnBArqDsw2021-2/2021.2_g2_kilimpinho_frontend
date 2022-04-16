import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export const CheckisAdmin = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);

  return !!session?.user?.isAdmin;
};
