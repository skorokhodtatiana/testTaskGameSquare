import './_table.scss';

const Table = (props) => {
	const {option} = props;
	console.log(option);
	const rows1 = (() => new Array());
	const rows = (() => new Array().fill(option),[option]);
	console.log(rows);
		
}

export default Table;