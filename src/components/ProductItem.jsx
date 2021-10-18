import React from 'react';
import styled from 'styled-components';

function ProductItem(props) {
	return (
		<Wrapper>
			<img maxHeight='500px' width='300px' alt='' src={props.image}></img>
			<h2>{props.title}</h2>
			<p>{props.desc}</p>
		</Wrapper>
	);
}

export default ProductItem;

const Wrapper = styled.div`
	height: 100%;
	width: 35vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	overflow-y: hidden;
	@media (max-width: 1000px) {
		width: 45vw;
	}
	@media (max-width: 620px) {
		width: 100vw;
	}
`;
