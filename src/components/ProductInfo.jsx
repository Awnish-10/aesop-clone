import React from 'react';
import styled from 'styled-components';
import ProductInfoItem from './ProductInfoItem';
import Sizes from './Sizes';

function ProductInfo() {
	const productItems = [
		{
			title: 'Suited to',
			desc: 'Most skin types, particularly dry and sensitive',
		},

		{
			title: 'Skin feel',
			desc: 'Cleansed, softened and refreshed',
		},
		{
			title: 'Key ingredients',
			desc: 'Panthenol, Grape Seed, Sandalwood',
		},
	];
	return (
		<Wrapper>
			<Type>
				<p>
					<span>Skin</span>
					<span>Cleanse</span>
				</p>
			</Type>
			<Name>
				<h1>Gentle Facial Cleansing Milk</h1>
			</Name>
			<Desc>
				<p>
					An exceptionally gentle cleanser for daily use, enhanced with
					botanicals renowned for their soothing properties. Removes makeup
					effortlessly and rinses with ease.
				</p>
			</Desc>
			{productItems.map((item) => {
				return <ProductInfoItem title={item.title} desc={item.desc} />;
			})}
			<Sizes />
		</Wrapper>
	);
}

export default ProductInfo;

const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

const Type = styled.div`
	margin-top: 5px;
	margin-bottom: 10px;
	p {
		span {
			padding-right: 10px;
			cursor: pointer;
			:hover {
				text-decoration: underline;
			}
		}
	}
`;
const Name = styled.div`
	padding: 10px 0;
	h1 {
		font-weight: 600;
		font-size: 35px;
	}
`;
const Desc = styled.div`
	padding-bottom: 30px;
	border-bottom: 2px solid black;
`;
