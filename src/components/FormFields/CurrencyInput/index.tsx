import React, { useCallback, useState } from "react";
import NumberFormat, {
  FormatInputValueFunction,
  NumberFormatProps,
  NumberFormatValues,
  SourceInfo,
} from "react-number-format";

import { Input, InputProps } from "@/components/FormFields/Input";
import { formatAmount } from "@/utils/formatAmount";

type CurrencyInputdAttributes = InputProps & NumberFormatProps;

export type CurrencyInputdProps = CurrencyInputdAttributes;

export const CurrencyInput = (props: CurrencyInputdProps) => {
  const { onValueChange, label, name, value, onChange } = props;

  const [internalValue, setInternalValue] = useState<string | number>("");

  const handleChange = useCallback(
    (v: NumberFormatValues, sourceInfo: SourceInfo) => {
      setInternalValue(parseFloat(v.value));

      if (onValueChange) {
        onValueChange({ ...v, floatValue: v.floatValue }, sourceInfo);
      }
    },
    [onValueChange]
  );

  const currencyFormatter: FormatInputValueFunction = useCallback(
    (formattedValue) => {
      if (!Number(formattedValue)) return "R$ 0,00";

      return formatAmount(Number(formattedValue) / 100);
    },
    []
  );

  const keyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code === "Backspace" && !internalValue && !value) {
        e.preventDefault();
      }

      if (e.code === "Backspace" && internalValue < 10) {
        e.preventDefault();
        setInternalValue(0);
        onChange?.({
          target: { value: "", name },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    },
    [internalValue, onChange, name, value]
  );

  return (
    <NumberFormat
      {...props}
      value={value || Number(internalValue)}
      label={label}
      format={currencyFormatter}
      onValueChange={handleChange}
      prefix="R$ "
      allowEmptyFormatting
      decimalScale={2}
      fixedDecimalScale
      onKeyDown={keyDown}
      customInput={Input}
    />
  );
};
