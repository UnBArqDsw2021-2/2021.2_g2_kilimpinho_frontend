import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { FieldError } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import { useTheme } from "styled-components";

import { InputErrorMessage } from "@/components/FormFields/InputErrorMessage";

import type { InputStyles } from "./styles";
import * as S from "./styles";

type InputAttributes = InputHTMLAttributes<HTMLInputElement> & InputStyles;

export interface InputProps extends InputAttributes {
  name: string;
  label: string;
  errors?: FieldError;
  icon?: JSX.Element;
  iconIsClickable?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  const {
    name,
    label,
    errors,
    icon,
    color = "black",
    iconIsClickable = false,
  } = props;

  const [iconWidth, setIconWidth] = useState(0);
  const iconRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIconWidth(iconRef?.current?.clientWidth || 0);
  }, [icon, errors]);

  /* Define error message margin */
  const [marginBottom, setMarginBottom] = useState(0);
  const marginRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMarginBottom(marginRef?.current?.clientHeight || 0);
  }, [marginRef, errors]);

  const isTextArea = props.type === "textarea";
  const tag = isTextArea ? "textarea" : "input";

  return (
    <S.InputContainer marginBottom={marginBottom}>
      <S.InputGroup>
        <S.Label htmlFor={name} color={color}>
          {label}
        </S.Label>
        <S.Input
          as={tag}
          autoComplete="off"
          id={name}
          ref={ref}
          {...props}
          placeholder={label}
          color={color}
          error={Boolean(errors)}
          iconWidth={iconWidth}
        />

        <S.Icon
          ref={iconRef}
          isClickable={!!icon?.props?.onClick || iconIsClickable}
        >
          {!!icon && icon}
        </S.Icon>
      </S.InputGroup>

      <InputErrorMessage errors={errors!} ref={marginRef} />
    </S.InputContainer>
  );
});
