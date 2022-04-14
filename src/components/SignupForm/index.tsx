import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { Flex } from "reflexbox";
import { useTheme } from "styled-components";
import { Button } from "@/components/Button";
import { Input, PasswordInput } from "@/components/FormFields";
import React, { useCallback } from "react";
import InputMask from "react-input-mask";
import GridLayout from "UI/GridLayout";
import { signup } from "@/services/userService";

export const SignUpForm = () => {
  const onSubmit = async (data: ISignup) => {
    try {
      const { cpf, email, name, password } = data;
      await signup({ cpf, email, name, password });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    watch,
    control,
  } = useForm<ISignup>();

  const theme = useTheme();
  // const renderPhone = useCallback(
  //   ({ field: { value, onChange } }) => (
  //     <InputMask mask="(99) 99999-99999" value={value} onChange={onChange}>
  //       {() => (
  //         <Input
  //           label="Telefone"
  //           name="phone"
  //           errors={errors?.phone}
  //           value={value}
  //         />
  //       )}
  //     </InputMask>
  //   ),
  //   [errors?.phone]
  // );

  const renderCpf = useCallback(
    ({ field: { value, onChange, ref } }) => (
      <InputMask mask="999.999.999-99" value={value} onChange={onChange}>
        {() => (
          <Input
            label="CPF"
            name="cpf"
            errors={errors?.cpf}
            value={value}
            ref={ref}
          />
        )}
      </InputMask>
    ),
    [errors?.cpf]
  );
  return (
    <Flex flexDirection="column">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", {
            required: "Email é obrigatório",
          })}
          label="Email"
          errors={errors?.email}
        />
        <GridLayout columnsAmount={2} gap="0 1rem">
          {() => (
            <>
              <Input
                {...register("name", {
                  required: "Nome é obrigatório",
                })}
                label="Nome"
                errors={errors?.name}
              />
              {/* <Input
                {...register('surname', {
                  required: 'Sobrenome é obrigatório',
                })}
                label="Sobrenome"
                errors={errors?.surname}
              /> */}
              {/* <Controller
                name="phone"
                control={control}
                rules={{ required: 'Telefone é obrigatório' }}
                defaultValue=""
                render={renderPhone}
              /> */}
              <Controller
                name="cpf"
                control={control}
                rules={{ required: "CPF é obrigatório" }}
                defaultValue=""
                render={renderCpf}
              />
            </>
          )}
        </GridLayout>
        {/* <Input
          {...register('address', {
            required: 'Endereço é obrigatório',
          })}
          label="Endereço"
          errors={errors?.address}
        /> */}
        <GridLayout columnsAmount={2} gap="0 1rem">
          {() => (
            <>
              <PasswordInput
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Senha precisa de no minímo 6 caracteres",
                  },
                  required: "Senha é obrigatória",
                })}
                label="Senha"
                errors={errors?.password}
              />
              <PasswordInput
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === watch("password") || "As senhas não são iguais",
                })}
                errors={errors?.confirmPassword}
                label="Confirmar senha"
              />
            </>
          )}
        </GridLayout>

        <Flex flexDirection="column" marginTop={theme.spacings.medium}>
          <Button type="submit" isLoading={isSubmitting} size="large">
            Cadastrar
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
