import { useTheme } from 'styled-components';
import { Flex } from 'reflexbox';
import Typography from "@material-ui/core/Typography";


export const Stars = () => {


	const theme = useTheme();

	return (
		<Flex>
			<Typography component="legend">Controlled</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
            }}
            />
            <Typography component="legend">Read only</Typography>
            <Rating name="read-only" value={value} readOnly />
            <Typography component="legend">Disabled</Typography>
            <Rating name="disabled" value={value} disabled />
            <Typography component="legend">No rating given</Typography>
            <Rating name="no-value" value={null} />
		</Flex>
	);
};
