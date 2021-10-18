import React from 'react';
import styled from 'styled-components';

function PrintFooterData(props) {
	return (
		<Wrapper>
			<Title>
				<h2>{props.title}</h2>
			</Title>
			<Data>
				{props.data.map((item) => {
					return <p>{item}</p>;
				})}
			</Data>
		</Wrapper>
	);
}

export default PrintFooterData;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

const Title = styled.div`
	padding: 15px 0;
	border-bottom: 2px solid white;
	h2 {
		font-size: 30px;
		font-weight: 500;
	}
`;

const Data = styled.div`
	padding: 15px 0;
	p {
		padding-bottom: 10px;
		line-height: 30px;
	}
`;
