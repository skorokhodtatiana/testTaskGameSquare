import './_table.scss';

const Table = (props) => {
	const {option} = props;
	console.log(option);
	for(let i = 0; i <= option; i++) {
			<div className='cell'>cell</div>
	}
}

export default Table;