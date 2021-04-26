import React from "react";

const AddRoboButton = (props) => {
	const { onButtonClick } = props;
	   return (
		<div className='pa2'>
			<button style={{ color: '#0ccac4' }}
				className='b ph3 pv2 b--green ba bg-transparent grow pointer' onClick={onButtonClick}>Add New Robots
			</button>
		</div>
	);
};

export default AddRoboButton;