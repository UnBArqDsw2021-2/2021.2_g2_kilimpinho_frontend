import { useState } from "react";
import { Flex } from "@/UI/Flex/index";
import { useTheme } from "styled-components";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";

export const ServicosLayout = () => {

  const theme = useTheme();

  const router = useRouter();
  return (
      <Flex flexDirection="column" gap={theme.spacings.medium}>
        <div>
          <Button color="secondary" onClick={() => router.push('/solicitarLavagem')}>
            LAVAGEM
          </Button>
          &emsp;&emsp;
          <Button color="secondary" onClick={() => router.push("/historico")}>
            HISTÓRICO
          </Button>
        </div>
      </Flex>
  );
};
