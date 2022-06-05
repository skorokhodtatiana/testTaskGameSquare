import { useEffect, useState } from "react";

import Table from '../table/Table'; 

const GettingData = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	const [items, setItems] = useState([]);
	const [isSelected, setIsSelected] = useState('');
	const[start, setStart] = useState(false);
	const [hovered, setHovered] = useState({});

	const handleChange = (event) => {
		setIsSelected(event.target.value);
		setStart(false)
		setHovered({});
	}

	const handleStart = () => {
		setStart(true);
	}

	const handleOver = (key) => {
		setHovered((prevState) => ({...prevState, [key]: !prevState[key]}));
	}

	useEffect(() => {
		fetch("http://demo7919674.mockable.io")
		.then(async (result) => {
			const data = await result.json();
			setItems(data);
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
						<option key = {item.name} value={item.field}>{item.name}</option>
					))}
				</select>
				<button onClick = {handleStart}>Start</button>
			</div>
			{isSelected && start && (
			<Table
			option = {isSelected}
			hoveredItems = {hovered}
			onMouseEnter={handleOver}
			></Table>
			)}
		</div>
	)
}

export default GettingData;
