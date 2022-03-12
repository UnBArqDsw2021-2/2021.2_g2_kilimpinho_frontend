import { forwardRef, useCallback, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import { Flex } from 'reflexbox';
import { useTheme } from 'styled-components';

import { Input, InputProps } from '../Input';

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  function PasswordField(props, ref) {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordShown = useCallback(
      () => setShowPassword(!showPassword),
      [showPassword]
    );

    const theme = useTheme();
    const PasswordIcon = useCallback(
      (_) => (
        <Flex alignItems="center">
          {!showPassword ? (
            <FaRegEye
              size={23}
              onClick={togglePasswordShown}
              fill={theme.colors.darkGray400}
            />
          ) : (
            <FaRegEyeSlash
              size={23}
              onClick={togglePasswordShown}
              fill={theme.colors.darkGray400}
            />
          )}
        </Flex>
      ),
      [showPassword, togglePasswordShown]
    );

    return (
      <Input
        type={showPassword ? 'text' : 'password'}
        {...props}
        ref={ref}
        iconIsClickable
        icon={<PasswordIcon />}
      />
    );
  }
);
