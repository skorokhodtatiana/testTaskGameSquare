import './_table.scss';

const Table = (props) => {
	const {option, onMouseEnter, hoveredItems} = props;
	const arr = [];
	let numSquare = Number(option);
	for (numSquare; numSquare > 0; numSquare--) {
		arr.push(option);
	}

	return(
		<div>
			{arr.map((itemRow, indexItemRow) => {
				return (
					<div className="row" key={`${itemRow}${indexItemRow}`}>
						{arr.map((itemCell, indexItemCell) => {
							const itemPath = `${indexItemRow + 1}--${indexItemCell + 1}`
							return(
								<div onMouseEnter={() => onMouseEnter(itemPath)} className={`cell ${hoveredItems[itemPath] ? 'blueCell' : ''}`} key={`${itemCell}${indexItemCell}`}></div>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}

export default Table;