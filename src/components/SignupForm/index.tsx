import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Flex } from 'reflexbox';
import { useTheme } from 'styled-components';
import * as S from './styles';
import { Button } from '@/components/Button';
import { Input, PasswordInput } from '@/components/FormFields';

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

export const SignUpForm = () => {
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormValues>();

  const theme = useTheme();

  return (
    <Flex flexDirection="column" style={{ gap: theme.spacings.medium }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.SignUpGrid>
          <Input
            {...register('name', {
              required: 'Nome é obrigatório',
            })}
            label="name"
            errors={errors?.name}
          />
          <Input
            {...register('surname', {
              required: 'Sobrenome é obrigatório',
            })}
            label="Sobrenome"
            errors={errors?.email}
          />
          <Input
            {...register('phone', {
              required: 'Telefone é obrigatório',
            })}
            label="phone"
            errors={errors?.phone}
          />
          <Input
            {...register('cpf', {
              required: 'Telefone é obrigatório',
            })}
            label="cpf"
            errors={errors?.cpf}
          />
          <Input
            {...register('address', {
              required: 'Telefone é obrigatório',
            })}
            label="Endereço"
            errors={errors?.address}
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
          <PasswordInput
            {...register('confirmPassword', {
              validate: (value) =>
                value === watch('password') || 'As senhas não são iguais',
            })}
            errors={errors?.confirmPassword}
            label="Confirmar senha"
          />
        </S.SignUpGrid>

        <Flex flexDirection="column" marginTop={theme.spacings.medium}>
          <Button type="submit" isLoading={isSubmitting} size="large">
            Cadastrar
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
