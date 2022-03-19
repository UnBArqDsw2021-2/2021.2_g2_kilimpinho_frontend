import { useForm } from 'react-hook-form';
import { Flex } from 'reflexbox';
import { useTheme } from 'styled-components';
import { Button } from '@/components/Button';
import { Input, PasswordInput } from '@/components/FormFields';
import React from 'react';
import Link from 'next/link';
export interface FormValues {
  name: string;
  surname: string;
  phone: string;
  cpf: string;
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SigninForm = () => {
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const theme = useTheme();

  return (
    <Flex flexDirection="column">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email', {
            required: 'Email é obrigatório',
          })}
          label="Email"
          errors={errors?.email}
        />

        <PasswordInput
          {...register('password', {
            minLength: {
              value: 6,
              message: 'Senha precisa de no minímo 6 caracteres',
            },
            required: 'Senha é obrigatória',
          })}
          label="Senha"
          errors={errors?.password}
        />

        <Flex
          flexDirection="column"
          marginTop={theme.spacings.medium}
          style={{ gap: theme.spacings.small }}
        >
          <Link href="#">Esqueceu sua senha?</Link>
          <Button type="submit" isLoading={isSubmitting} size="large">
            LOGIN
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
