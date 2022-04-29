import { useEffect, useState } from "react";

const DropDownList = (props) => {
	const {value} = props;
	return (
		<div>
			<select>
				<option autoFocus disabled value="Select">Select</option>
				<option value="1">{value}</option>
				<option value="2">{value}</option>
				<option value="3">{value}</option>
			</select>
			<button>Start</button>
		</div>
	)
}

const GettingData = () => {
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
			},

			(error) => {
			setIsLoaded(true);
			setError(error);
			}
		)
	}, [])
	// {items.map((item) =>(
	// 	console.log(item.name),
	// 	<DropDownList value={item.name}
	// 	></DropDownList>
	// ) )}
}

export default GettingData;
