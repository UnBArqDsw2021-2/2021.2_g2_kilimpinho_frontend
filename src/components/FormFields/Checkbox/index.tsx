import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { FieldError } from "react-hook-form";

import { InputContainer } from "@/components/FormFields/Input/styles";
import { InputErrorMessage } from "@/components/FormFields/InputErrorMessage";
import { Flex } from "@/UI/Flex";

import * as S from "./styles";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  errors?: FieldError;
  label: string | JSX.Element;
  labelFor: string;
  labelColor?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { label, labelFor, labelColor, errors } = props;

    /* Define error message margin */
    const [marginBottom, setMarginBottom] = useState(0);
    const marginRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      setMarginBottom(marginRef?.current?.clientHeight || 0);
    }, [marginRef, errors]);

    return (
      <InputContainer marginBottom={marginBottom}>
        <Flex alignItems="flex-start">
          <S.Checkbox type="checkbox" ref={ref} id={labelFor} {...props} />
          {!!label && (
            <S.Label htmlFor={labelFor} labelColor={labelColor}>
              {label}
            </S.Label>
          )}
        </Flex>

        <InputErrorMessage errors={errors!} ref={marginRef} />
      </InputContainer>
    );
  }
);

Checkbox.displayName = "Checkbox";
