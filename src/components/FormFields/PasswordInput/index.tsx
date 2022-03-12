import { forwardRef, useCallback, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import { Flex } from 'reflexbox';

import { Input, InputProps } from '../Input';

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  function PasswordField(props, ref) {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordShown = useCallback(
      () => setShowPassword(!showPassword),
      [showPassword]
    );

    const PasswordIcon = useCallback(
      (_) => (
        <Flex alignItems="center">
          {/* {hasErrors && (
          <Divider
            orientation="vertical"
            color={!hasErrors ? 'lightGray200' : 'red'}
            width="20px"
          />
        )} */}
          {!showPassword ? (
            <FaRegEye
              size={23}
              onClick={togglePasswordShown}
              fill="url(#svg-gradient)"
            />
          ) : (
            <FaRegEyeSlash
              size={23}
              onClick={togglePasswordShown}
              fill="url(#svg-gradient)"
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
