import React from 'react';
import styled from 'styled-components';
import ProductInfoItem from './ProductInfoItem';

function Component2() {
	const itemContent = [
		{
			title: 'Dosage',
			desc: 'Half a teaspoon',
		},
		{
			title: 'Texture',
			desc: 'Non-foaming, water-soluble emulsion',
		},
		{
			title: 'Aroma',
			desc: 'Mild, woody, herbaceous',
		},
	];
	return (
		<Wrapper>
			<Left>
				<img
					height='700px'
					width='700px'
					alt=''
					src='https://www.aesop.com/u1nb1km7t5q7/mxlJIOIMuyoNmCVZsHSZw/2c8cb79b9f24c268342405d97839522e/Aesop-Skin-Gentle-Facial-Cleansing-Milk-Texture-50-50-Tablet-1536x950px.jpg'
				></img>
			</Left>
			<Right>
				<h3>How to use</h3>
				<h1>
					Morning and evening, shake before use; then dispense a small
					amount onto hands and massage over face and neck. Rinse with
					tepid water, or remove using a damp cloth.
				</h1>
				{itemContent.map((item) => {
					return <ProductInfoItem title={item.title} desc={item.desc} />;
				})}
			</Right>
		</Wrapper>
	);
}

export default Component2;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;
const Left = styled.div`
	flex: 1;
`;

const Right = styled.div`
	flex: 1;
	padding: 70px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	h1 {
		font-weight: 300;
		border-bottom: 2px solid grey;
		padding-bottom: 20px;
		line-height: 45px;
	}
`;
