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
	const handleChangeColor = (itemPath) => {
		setisSelect(true);
	}

	let colorSquare = isSelect ? "cell" : "blueCell";
	return(
		<div>
			{arr.map((itemRow, indexItemRow) => {
		return (
			<div className="row" key={`${itemRow}${indexItemRow}`}>
				{arr.map((itemCell, indexItemCell) => {
					const itemPath = `${indexItemRow}--${indexItemCell}`
					console.log(itemPath);
					return(
						<div onMouseEnter={() => handleChangeColor(itemPath)} className={'cell'} key={`${itemCell}${indexItemCell}`}></div>
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