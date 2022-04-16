import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { Flex } from "@/UI/Flex";
import { useTheme } from "styled-components";
import { Button } from "@/components/Button";
import { Input } from "@/components/FormFields";
import React, { useCallback } from "react";
import InputMask from "react-input-mask";
import { registerExpenditure } from "@/services/expenditureService";
import { toast } from "react-toastify";
import { CurrencyInput } from "../FormFields/CurrencyInput";
import { Checkbox } from "../FormFields/Checkbox";
import { ExpenditureAdapter } from "adapters/expenditureAdapter";

export const ExpenditureForm = () => {
  const onSubmit = async (data: IExpenditure) => {
    try {
      const expenditure = new ExpenditureAdapter(data);

      expenditure.addNewExpenditure();
      toast.success("Despesa cadastrada com sucesso");
    } catch (error) {
      console.log(error);
    }
  };
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
  } = useForm<IExpenditure>();

  const theme = useTheme();

  const renderDate = useCallback(
    ({ field: { value, onChange, ref } }) => (
      <InputMask mask="99/99/9999" value={value} onChange={onChange}>
        {() => (
          <Input
            label="Data"
            name="date"
            errors={errors?.date}
            value={value}
            ref={ref}
          />
        )}
      </InputMask>
    ),
    [errors?.title]
  );

  const renderAmount = useCallback(
    ({ field: { value, onChange } }) => (
      <CurrencyInput
        value={value}
        onChange={onChange}
        name="amount"
        label="Valor"
        errors={errors?.amount}
      />
    ),
    [errors?.title]
  );

  return (
    <Flex flexDirection="column">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={theme.spacings.medium}>
          <Input
            {...register("title", {
              required: "Titulo é obrigatório",
            })}
            label="Titulo"
            errors={errors?.title}
          />

          <Controller
            render={renderAmount}
            name="amount"
            control={control}
            rules={{ required: "Valor é obrigatória" }}
          />
          <Controller
            render={renderDate}
            name="date"
            control={control}
            rules={{ required: "Data é obrigatória" }}
          />
        </Flex>
        <Input
          {...register("description", {
            required: "Descrição é obrigatório",
          })}
          label="Observações"
          type="textarea"
          errors={errors?.title}
        />
        <Checkbox
          labelFor="isFixed"
          {...register("isFixed")}
          label="É despesa fixa"
        />

        <Flex flexDirection="column" marginTop={theme.spacings.medium}>
          <Button type="submit" isLoading={isSubmitting} size="large">
            Cadastrar
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
