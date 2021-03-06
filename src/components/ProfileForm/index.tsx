import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { Flex } from 'reflexbox';
import { useTheme } from 'styled-components';
import { Button } from '@/components/Button';
import { Input, PasswordInput } from '@/components/FormFields';
import React, { useCallback, useEffect, useMemo } from 'react';
import InputMask from 'react-input-mask';
import GridLayout from 'UI/GridLayout';
import { updateProfile } from '@/services/userService';
import { useSession } from 'next-auth/react';

export const ProfileForm = () => {
  const {data: session} = useSession()
  const reloadSession = () => {
    const event = new Event("visibilitychange");
    document.dispatchEvent(event);
  };
  const onSubmit = async (data: ISignup) => {
    try {
      const { cpf, email, name, password } = data;
      await updateProfile({ cpf, email, name, password }, session?.user?.token!);
      reloadSession()
    
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
  } = useForm<ISignup>({
    defaultValues: useMemo(() => session?.user, [session?.user])
  })

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
          {...register('email', {
            required: 'Email ?? obrigat??rio',
          })}
          label="Email"
          errors={errors?.email}
        />
        <GridLayout columnsAmount={2} gap="0 1rem">
          {() => (
            <>
              <Input
                {...register('name', {
                  required: 'Nome ?? obrigat??rio',
                })}
                label="Nome"
                errors={errors?.name}
              />
              {/* <Input
                {...register('surname', {
                  required: 'Sobrenome ?? obrigat??rio',
                })}
                label="Sobrenome"
                errors={errors?.surname}
              /> */}
              {/* <Controller
                name="phone"
                control={control}
                rules={{ required: 'Telefone ?? obrigat??rio' }}
                defaultValue=""
                render={renderPhone}
              /> */}
              <Controller
                name="cpf"
                control={control}
                rules={{ required: 'CPF ?? obrigat??rio' }}
                defaultValue=""
                render={renderCpf}
              />
            </>
          )}
        </GridLayout>
        {/* <Input
          {...register('address', {
            required: 'Endere??o ?? obrigat??rio',
          })}
          label="Endere??o"
          errors={errors?.address}
        /> */}
        <GridLayout columnsAmount={2} gap="0 1rem">
          {() => (
            <>
              <PasswordInput
                {...register('password', {
                  minLength: {
                    value: 6,
                    message: 'Senha precisa de no min??mo 6 caracteres',
                  },
                  required: 'Senha ?? obrigat??ria',
                })}
                label="Senha"
                errors={errors?.password}
              />
              <PasswordInput
                {...register('confirmPassword', {
                  validate: (value) =>
                    value === watch('password') || 'As senhas n??o s??o iguais',
                })}
                errors={errors?.confirmPassword}
                label="Confirmar senha"
              />
            </>
          )}
        </GridLayout>

        <Flex flexDirection="column" marginTop={theme.spacings.medium}>
          <Button type="submit" isLoading={isSubmitting} size="large">
            Salvar
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
