import { useEffect, useState } from "react";

import './_table.scss';

const Table = (props) => {

	const [isSelect, setisSelect] = useState(false);

	const {option} = props;
	console.log(option);
	const arr = [];
	let numSquare = Number(option);
	for (numSquare; numSquare > 0; numSquare--) {
		arr.push(option);
	}
	const handleChangeColor = () => {
		setisSelect(true);
	}
	return(
		<div>
			{arr.map((itemRow, indexItemRow) => {
		return (
			<div className="row" key={`${itemRow}${indexItemRow}`}>
				{arr.map((itemCell, indexItemCell) => {
					return(
						<div onClick={handleChangeColor} className={isSelect ? "cell" : "blueCell"} key={`${itemCell}${indexItemCell}`}></div>
					)
				})}
			</div>
		)
	})}
		</div>
	)
	

	// const rows1 = (() => new Array());
	// const rows = (() => new Array().fill(option),[option]);
	// console.log(arr);
		
}

export default Table;