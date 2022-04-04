import { useForm } from 'react-hook-form';
import { Flex } from 'reflexbox';
import { useTheme } from 'styled-components';
import { Button } from '@/components/Button';
import { Input, PasswordInput } from '@/components/FormFields';
import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export const SigninForm = () => {
  const router = useRouter();
  const onSubmit = (credentials: ISignin) => {
    try {
      signIn('credentials', {
        ...credentials,
        redirect: false, // prevents page reload on error
        callbackUrl: '/configuracoes',
      });
      toast.success('Seja bem vindo');
      router.push('/configuracoes');
    } catch (error) {
      console.log(error);
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ISignin>();

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
