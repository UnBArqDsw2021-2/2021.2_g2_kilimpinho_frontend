import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { Flex } from "reflexbox";
import { useTheme } from "styled-components";
import { Button } from "@/components/Button";
import { Input, PasswordInput, Stars } from "@/components/FormFields";
import React, { useCallback } from "react";
import InputMask from "react-input-mask";
import GridLayout from "UI/GridLayout";
import { avaliation } from "@/services/userService";
import { useSession } from "next-auth/react";

export const Avaliation = () => {
	const { data: session } = useSession();
	const onSubmit = (data: Avaliation) => {
		data.ratingBy = session?.user._id;
		try {
			avaliation(data);
		} catch (error) {
			console.log(error);
		}
	};

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<Avaliation>();

	const theme = useTheme();

	return (
		<Flex flexDirection="column">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stars
				/>
				<Input
					{...register("comment", {
						required: "Descrição é obrigatório",
					})}
					label="Observações"
					type="textarea"
					errors={errors?.comment}
				/>

				<Flex flexDirection="column" marginTop={theme.spacings.medium}>
					<Button type="submit" isLoading={isSubmitting} size="large">
						Enviar
					</Button>
				</Flex>
			</form>
		</Flex>
	);
};
