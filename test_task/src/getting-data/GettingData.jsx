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

	if (error) {
		return <div>Ошибка: {error.message}</div>;
		} else if (!isLoaded) {
		return <div>Загрузка...</div>;
		} else {
			return (
				<div>
					<select>
						<option autoFocus disabled>Choose level</option>
				{items.map((item) => (
					console.log(item.name),
						<option>{item.name}</option>
				))}
					</select>
					<button>Start</button>
				</div>
			)
		}
	
}

export default GettingData;
