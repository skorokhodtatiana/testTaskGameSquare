import './_table.scss';

const Table = (props) => {
	const {option} = props;
	console.log(option);
	const arr = [];
	let numSquare = Number(option);
	for (numSquare; numSquare > 0; numSquare--) {
		arr.push(option);
	}
	return(
		<div>
			{arr.map((item, indexItem) => {
		return (
			<div key={`${item}${indexItem}`}>one</div>
		)
	})}
		</div>
	)
	

	// const rows1 = (() => new Array());
	// const rows = (() => new Array().fill(option),[option]);
	// console.log(arr);
		
}

export default Table;