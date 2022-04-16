import { ReactElement } from "react";
import { AuthLayout } from "layouts/Auth";
import { NextPageWithLayout } from "@/types/next-page";
import { Flex } from "reflexbox";
import { useTheme } from "styled-components";
import { Divider } from "@/components/Divider";
import { SigninForm } from "@/components/SigninForm";
import { Landing } from "@/components/Landing";
import { SideMenu } from "@/components/SideMenu";
import { MenuItem } from "@/components/SideMenu/MenuItem";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";
import { HomeLayout } from "layouts/Home";

const Auth: NextPageWithLayout = () => {
  const theme = useTheme();

  return <HomeLayout />;
};

Auth.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Auth;
