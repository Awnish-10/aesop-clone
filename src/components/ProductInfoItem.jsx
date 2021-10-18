import React from 'react';
import styled from 'styled-components';

function ProductInfoItem(props) {
	return (
		<Wrapper>
			<h3>{props.title}</h3>
			<p>{props.desc}</p>
		</Wrapper>
	);
}

export default ProductInfoItem;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 15px 0;
	border-bottom: 1px solid grey;
	width: 100%;
`;
