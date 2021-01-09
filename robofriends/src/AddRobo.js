import React from "react";

const AddRobo = (props) => {
	const { onButtonClick } = props;
	return (
		<div>                                                                                                                                                                       
			<button onClick={onButtonClick}
				style={{ color: '#0ccac4' }}
				className='b ph3 pv2 b--green ba bg-transparent grow pointer'>Add Robot
			</button>
		</div>
	);
};

export default AddRobo;