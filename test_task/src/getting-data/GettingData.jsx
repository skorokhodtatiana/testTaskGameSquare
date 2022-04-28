import { useEffect, useState } from "react";

function GettingData() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch("http://demo7919674.mockable.io")
		.then(res => res.json())
		.then(
			(result) => {
			setIsLoaded(true);
			setItems(result);
			console.log(result)
			},

			(error) => {
			setIsLoaded(true);
			setError(error);
			}
		)
	}, [])
}

export default GettingData;
