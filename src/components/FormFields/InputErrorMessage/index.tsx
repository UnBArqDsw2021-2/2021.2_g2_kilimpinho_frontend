import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import * as S from './styles';

export interface ErrorMessageProps {
  errors: FieldError;
}

export const InputErrorMessage = forwardRef<HTMLSpanElement, ErrorMessageProps>(
  ({ errors }, ref) => {
    if (!errors) return null;

    return (
      <S.ErrorMessage ref={ref}>
        {errors?.message || 'Valor invalido'}
      </S.ErrorMessage>
    );
  }
);

InputErrorMessage.displayName = 'InputErrorMessage';
