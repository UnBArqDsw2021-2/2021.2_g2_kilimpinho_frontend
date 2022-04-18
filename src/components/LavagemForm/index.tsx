import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Flex } from "reflexbox";
import { useTheme } from "styled-components";
import { Button } from "@/components/Button";
import { Input, PasswordInput } from "@/components/FormFields";
import React, { useCallback } from "react";
import GridLayout from "UI/GridLayout";
import { signup } from "@/services/userService";
import { ILavagem, IUser } from "@/types/user";
import { Checkbox } from "../FormFields/Checkbox";

export const LavagemForm = () => {
  const onSubmit = async (data: ILavagem) => {
    try {
      const { marca, modelo, placa, cor, polimento, limpeza, cheirinho} = data;
      await signup({marca, modelo, placa, cor, polimento, limpeza, cheirinho});
      router.push("/lavagem");
    } catch (error) {
      console.log(error);
    }
  };
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ILavagem>();

  const theme = useTheme();
  return (
    <Flex flexDirection="column">
        <form onSubmit={handleSubmit(onSubmit)}>
        <GridLayout columnsAmount={2} gap="0 1rem">
          {() => (
            <>
              <Input
                {...register("marca", {
                  required: "Marca é obrigatório",
                })}
                label="Marca"
                name="marca"
                errors={errors?.marca}
              />

              <Input
                {...register("modelo", {
                  required: "Modelo é obrigatório",
                })}
                label="Modelo"
                name="modelo"
                errors={errors?.modelo}
              />
              
            </>
          )}
        </GridLayout>
        <GridLayout columnsAmount={2} gap="0 1rem">
          {() => (
            <>
              <Input
                {...register("placa", {
                  required: "Placa é obrigatório",
                })}
                label="Placa"
                maxLength={7}
                name="placa"
                errors={errors?.cor}
              />
              <Input
                {...register("cor", {
                  required: "Cor é obrigatório",
                })}
                label="Cor"
                name="cor"
                errors={errors?.cor}
              />
            </>
          )}
        </GridLayout>

        <h3>Serviços extras</h3>
        <br/>
        <Checkbox
          labelFor="polimento"
          label="Polimento."
          name="polimento"
        />
        <Checkbox
          labelFor="limpeza"
          label="Limpeza de bancos de couro."
          name="limpeza"
        />
        <Checkbox
          labelFor="cheirinho"
          label="Cheirinho(Gratuito)."
          name="cheirinho"
        />

        <Flex flexDirection="column" marginTop={theme.spacings.medium}>
          <Button type="submit" isLoading={isSubmitting} size="large">
            SOLICITAR
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
