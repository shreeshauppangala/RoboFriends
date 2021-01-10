import React from "react";

const AddRobo = (props) => {
	const { onButtonClick } = props;
	return (
		<div className='pa2'>
			<button onClick={onButtonClick}
				style={{ color: '#0ccac4' }}
				className='b ph3 pv2 b--green ba bg-transparent grow pointer'>Add Robot
			</button>
		</div>
	);
};

export default AddRobo;