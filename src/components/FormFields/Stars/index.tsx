import { useTheme } from "styled-components";
import { Flex } from "reflexbox";
import { useState } from "react";
import { AdminLayout } from "layouts/Admin";
import StarRatings from "react-star-ratings";

export const Stars = (props: any) => {
	const [rating, setRating] = useState<number>(0);

	return (
		<>
			<StarRatings
				rating={rating}
				starRatedColor="blue"
				starHoverColor="blue"
				changeRating={setRating}
				numberOfStars={5}
				name="rating"
			/>
			{console.log(rating)}
		</>
	);
};
