import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { Flex } from 'reflexbox';
import { useTheme } from 'styled-components';
import { Button } from '@/components/Button';
import { Input, PasswordInput, TextBox, Stars } from '@/components/FormFields';
import React, { useCallback } from 'react';
import InputMask from 'react-input-mask';
import GridLayout from 'UI/GridLayout';
import { avaliation } from '@/services/userService';

export const Avaliation = () => {

    const onSubmit = (avaliationData: Avaliation) => {
        try {
            avaliation(avaliationData);
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
                
                <Stars/>
        
                <TextBox
                {...register('avaliationText')}
                erros={errors?.avaliationText}
                />

                <Button type="submit" isLoading={isSubmitting} size="large">
                    Enviar
                </Button>

            </form>
        </Flex>
    );
};
