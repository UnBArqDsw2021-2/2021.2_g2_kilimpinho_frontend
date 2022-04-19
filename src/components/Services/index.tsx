import { useForm } from "react-hook-form";
import { Flex } from "reflexbox";
import { useTheme } from "styled-components";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { Input, PasswordInput } from "@/components/FormFields";
import React from "react";
import Link from "next/link";
import { signIn, SignInResponse } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import * as S from "./styles";

const data = [
	{
		servico: "lavagem",
		extras: "1, 2, 3",
		data: "20/02/2022",
		cliente: "123.123.123-00",
		status: "comecar",
	},
	{
		servico: "lavagem",
		extras: "1, 2, 3",
		data: "20/02/2022",
		cliente: "123.123.123-00",
		status: "em andamento",
	},
	{
		servico: "lavagem",
		extras: "1, 2, 3",
		data: "20/02/2022",
		cliente: "123.123.123-00",
		status: "em andamento",
	},
	{
		servico: "lavagem",
		extras: "1, 2, 3",
		data: "20/02/2022",
		cliente: "123.123.123-00",
		status: "em andamento",
	},
	{
		servico: "lavagem",
		extras: "1, 2, 3",
		data: "20/02/2022",
		cliente: "123.123.123-00",
		status: "em andamento",
	},
	{
		servico: "lavagem",
		extras: "1, 2, 3",
		data: "20/02/2022",
		cliente: "123.123.123-00",
		status: "finalizado",
	},
];

export const Services = () => {
	const theme = useTheme();

	return (
		<Flex flexDirection="column" style={{ gap: "0.8rem" }}>
			<table>
				<tr>
					<th>servico</th>
					<th>extras</th>
					<th>data</th>
					<th>cliente</th>
					<th>status</th>
				</tr>
				{data.map((val, key) => {
					return (
						<S.Tr key={key}>
							<td>{val.servico}</td>
							<td>{val.extras}</td>
							<td>{val.data}</td>
							<td>{val.cliente}</td>
							<Button>{val.status}</Button>
						</S.Tr>
					);
				})}
			</table>
			<Divider
				color={theme.colors.lightGray}
				marginTop="1rem"
				height={1}
			></Divider>
			<Button type="submit" size="large">
				Finalizar o dia
			</Button>
		</Flex>
	);
};
