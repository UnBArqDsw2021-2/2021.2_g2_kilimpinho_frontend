import { ReactElement } from "react";
import { AdminLayout } from "layouts/Admin";
import { NextPageWithLayout } from "@/types/next-page";
import { Flex } from "reflexbox";
import { useTheme } from "styled-components";
import { Divider } from "@/components/Divider";
import { Button } from "@/components/Button";
import { Services } from "@/components/Services";

const Auth: NextPageWithLayout = () => {
	const theme = useTheme();

	return (
		<AdminLayout
			header={
				<>
					{
						<Flex flexDirection="column" style={{ gap: "0.8rem" }}>
							<Flex style={{ justifyContent: "space-between" }}>
								<h2>Serviços</h2>
								<Button type="submit" size="large">
									Atualizar
								</Button>
							</Flex>
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
			<Services />
		</AdminLayout>
	);
};

Auth.getLayout = function getLayout(page: ReactElement) {
	return page;
};

export default Auth;
