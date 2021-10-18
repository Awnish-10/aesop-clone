import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

function Sizes() {
	const [available, setAvailable] = useState(true);

	const changeHandler = (event) => {
		if (event.currentTarget.id === '100ml') {
			setAvailable(true);
		} else {
			setAvailable(false);
		}
	};
	return (
		<Wrapper>
			<h3>Sizes</h3>
			<Quantity>
				<input
					type='radio'
					id='100ml'
					name='fav_language'
					value='200ml'
					onChange={changeHandler}
				/>
				<label for='100ml'>100ml</label>
				<input
					type='radio'
					id='200ml'
					name='fav_language'
					value='200ml'
					onChange={changeHandler}
				/>
				 <label for='200ml'>200ml</label>
			</Quantity>
			{available ? (
				<Button
					style={{
						padding: '10px 40px',
						backgroundColor: '#252525',
						color: 'white',
					}}
					variant='contained'
				>
					Add to your cart - $255.00
				</Button>
			) : (
				<Button
					style={{
						padding: '10px 40px',
						color: 'white',
					}}
					disabled
					variant='contained'
				>
					Out of Stock
				</Button>
			)}
		</Wrapper>
	);
}

export default Sizes;

const Wrapper = styled.div`
	padding: 15px 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

const Quantity = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 20px;
	label {
		padding: 0 10px 0 5px;
	}
`;
