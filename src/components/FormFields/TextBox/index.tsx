import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Flex } from 'reflexbox';

export const TextBox = () => {

	const theme = useTheme();

	const [textAvaliation, setTextAvaliation] = useState('');

	return (
		<Flex flexDirection="column">
			<textarea
			name="Avaliacao"
			placeholder="Diga o que pensa"
			onChange={(e) => setTextAvaliation(e.target.value)}
			/>	
		</Flex>
	);
};
