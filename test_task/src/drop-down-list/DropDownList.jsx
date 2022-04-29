import './_drop-down-list.scss';
// import GettingData from '../getting-data/GettingData';

const DropDownList = (props) => {
	
	const {Easy, Normal, Hard} = props;
	return (
		<div>
			<select>
				<option autoFocus disabled value="Select">Select</option>
				<option value="1">{Easy}</option>
				<option value="2">{Normal}</option>
				<option value="3">{Hard}</option>
			</select>
			<button>Start</button>
		</div>
	)
}

export default DropDownList;