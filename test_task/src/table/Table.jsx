import './_table.scss';

const Table = (props) => {
	const {option} = props;
	console.log(option);
	const rows = (() => new Array(option).fill(0),[option]);
	console.log(rows);
		
}

export default Table;