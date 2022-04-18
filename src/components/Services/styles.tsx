import styled, { css, DefaultTheme } from "styled-components";

export const Tr = styled.tr`
	${({ theme }) => css`
		position: relative;
		align-items: center;
		justify-content: center;

		font-size: ${theme.font.sizes.regular};
		font-weight: ${theme.font.weights.semiBold};
		text-align: center;

		box-shadow: ${theme.shadows.medium};

		border: none;
		outline: none;
		border-radius: 10px;

		user-select: none;
		overflow: hidden;

		td {
			padding: 12px 30px;
		}

		button {
			box-shadow: none;
			width: 200px;
			height: 50px;
			border-radius: 0 10px 10px 0;
		}
	`}
`;
