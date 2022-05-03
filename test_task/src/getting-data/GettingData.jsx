import { useEffect, useState } from "react";

import Table from '../table/Table'; 

// const DropDownList = (props) => {
// 	const {value} = props;
// 	return (
// 		<div>
// 			<select>
// 				<option autoFocus disabled value="Select">Select</option>
// 				<option value="1">{value}</option>
// 				<option value="2">{value}</option>
// 				<option value="3">{value}</option>
// 			</select>
// 			<button>Start</button>
// 		</div>
// 	)
// }

const GettingData = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	const [items, setItems] = useState([]);
	const [isSelected, setIsSelected] = useState('');
	const[start, setStart] = useState(false);

	const handleChange = (event) => {
		setIsSelected(event.target.value);
	}

	const handleStart = () => {
		setStart(true);
	}

	useEffect(() => {
		fetch("http://demo7919674.mockable.io")
		.then(async (result) => {
			const data = await result.json();
			setItems(data);
			console.log(data);
		})
		.catch((error) => {
			setError(error);
		})
		.finally(() => {
			setIsLoaded(false);
		})
	}, [])

	return (
		<div className="content">
			<div className="content__select">
				<select
					onChange={handleChange}
					value={isSelected}
				>
					{!isSelected && <option>Choose level</option>}
					{items.map((item) => (
						console.log(item.name),
						<option key={item.name} value={item.field}>{item.name}</option>
					))}
				</select>
				<button onClick={handleStart}>Start</button>
			</div>
			{isSelected && start && (
			<Table
			option={isSelected}
			></Table>
			)}
		</div>
	)
}

export default GettingData;
