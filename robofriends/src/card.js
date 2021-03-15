import React from 'react';


const Card = (props) => {
	const {onCloseClick,name, email, id}=props

		return (
			<div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
				<div style={{ display: 'flex' }}>
					<button onClick={ () => onCloseClick(id) }
				  			style={{ cursor: 'pointer', color: '#0ccac4' }}>
						<span aria-hidden="true">X</span>
					</button>
				</div>
					<img alt='robots' src={`https://robohash.org/${id}?200*200`} />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		);
}

export default Card;