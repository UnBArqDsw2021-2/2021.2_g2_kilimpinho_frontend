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
import { useChart } from "@/contexts/ChartContext";

export const ExpenditureForm = () => {
  const router = useRouter();
  const { resetChart } = useChart();
  const onSubmit = async (data: IExpenditure) => {
    try {
      const expenditure = new ExpenditureAdapter(data);

      await expenditure.addNewExpenditure();
      resetChart();
      toast.success("Despesa cadastrada com sucesso");
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

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
              required: "Titulo ?? obrigat??rio",
            })}
            label="Titulo"
            errors={errors?.title}
          />

          <Controller
            render={renderAmount}
            name="amount"
            control={control}
            rules={{ required: "Valor ?? obrigat??ria" }}
          />
          <Controller
            render={renderDate}
            name="date"
            control={control}
            rules={{ required: "Data ?? obrigat??ria" }}
          />
        </Flex>
        <Input
          {...register("description", {
            required: "Descri????o ?? obrigat??rio",
          })}
          label="Observa????es"
          type="textarea"
          errors={errors?.title}
        />
        <Checkbox
          labelFor="isFixed"
          {...register("isFixed")}
          label="?? despesa fixa"
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
