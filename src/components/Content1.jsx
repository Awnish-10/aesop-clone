import React from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';

function Content1() {
	return (
		<Wrapper>
			<Container>
				<div>
					<h1>Aesop.</h1>
				</div>
				<div>
					<img
						height='400px'
						width='400px'
						alt=''
						src='https://www.aesop.com/u1nb1km7t5q7/2fnqAzD3tlKnIju5Q4h0C4/5357fca38d9ee9407d92ac48f34525e8/Aesop-Skin-Gentle-Facial-Cleansing-Milk-100mL-Large-782x796px.png'
					></img>
				</div>
			</Container>
			<Info>
				<ProductInfo />
			</Info>
		</Wrapper>
	);
}

export default Content1;

const Wrapper = styled.div`
	padding: 70px;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

const Container = styled.div`
	flex: 2;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	div {
		flex: 1;
	}
	@media (max-width: 1000px) {
		width: 100%;
	}
	@media (max-width: 700px) {
		width: 100%;
		flex-direction: column;
	}
`;

const Info = styled.div`
	flex: 1;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
`;
