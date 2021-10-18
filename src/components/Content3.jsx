import React, { useState } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { ArrowBackIosSharp, ArrowForwardIosSharp } from '@material-ui/icons';

function Content3() {
	const [slide, setSlide] = useState(0);

	function handleClick(direction) {
		direction === 'left'
			? setSlide(slide == 0 ? 2 : slide - 1) //--slide doesn't work
			: setSlide(slide == 2 ? 0 : slide + 1);
	}
	const productList = [
		{
			image: 'https://www.aesop.com/u1nb1km7t5q7/6mBQQ1oUHDzJBgmK20rhFM/08fac5b38405af6545e0ad6e24eb8d5f/Aesop-Skin-Remove-60mL-medium.png',
			title: 'Remove',
			desc: ' Makeup removal for the delicate eye area',
		},
		{
			image: 'https://www.aesop.com/u1nb1km7t5q7/5s6hi9HjFF4yORVDZy76WT/56d4c42e34b0015ee6820c4dbac648e1/AesopSkin-B-Tea-Balancing-Toner-200mL-medium.png',
			title: 'B & Tea Balancing Toner',
			desc: 'Balancing abd hydrating, a light finish',
		},
		{
			image: 'https://www.aesop.com/u1nb1km7t5q7/3MqlcuLSlWRko0YFIapoeO/acc45a31caf3dea1c7a2342cccfb0704/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-medium.png',
			title: 'Camellia Hydrating Cream',
			desc: 'For normal. dry and sensitive skin',
		},
		{
			image: 'https://www.aesop.com/u1nb1km7t5q7/5a6NwEgjTWS8Ovb0w6NPQp/d26fcac8fecd91a8a8b0714b86995a86/Aesop-Skin-Damascan-Rose-Facial-Treatment-25mL-Medium-535x522px.png',
			title: 'Damascan Rose Facial',
			desc: 'Leaves skin feeling supple, nourished',
		},
	];
	return (
		<Wrapper>
			<Container slide={slide}>
				<Content>
					<h1>Accompany with</h1>
					<p>
						Gently dissolve eye makeup with Remove; after cleansing with
						Gentle Facial Cleansing Milk, apply alcohol-free B & Tea
						Balancing Toner to refine pores and prepare skin for
						hydration; and finish with soothing Camellia Nut Facial
						Hydrating Cream. Twice weekly, blend in a few drops of
						Damascan Rose Facial Treatment for additional nourishment.
					</p>
				</Content>
				<Items>
					{productList.map((item) => {
						return (
							<ProductItem
								image={item.image}
								title={item.title}
								desc={item.desc}
							/>
						);
					})}
				</Items>
			</Container>
			<LeftArrow
				slide={slide}
				onClick={() => {
					handleClick('left');
				}}
			>
				<ArrowBackIosSharp />
			</LeftArrow>
			<RightArrow
				slide={slide}
				onClick={() => {
					handleClick('right');
				}}
			>
				<ArrowForwardIosSharp />
			</RightArrow>
		</Wrapper>
	);
}

export default Content3;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: relative;
	@media (max-width: 1000px) {
		height: 120vh;
	}
`;

const LeftArrow = styled.div`
	display: ${(props) => `${props.slide === 0 ? 'none' : 'initial'}`};
	cursor: pointer;
	background-color: #252525;
	color: white;
	position: absolute;
	left: 10px;
	padding: 10px 20px;
`;
const RightArrow = styled.div`
	display: ${(props) => `${props.slide === 2 ? 'none' : 'initial'}`};
	background-color: #252525;
	color: white;
	position: absolute;
	padding: 10px 20px;
	right: 10px;
	cursor: pointer;
`;

const Container = styled.div`
	left: ${(props) => `-${props.slide * 40}vw`};
	position: absolute;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	padding: 80px;
	transition: all 1s ease;
	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
		left: ${(props) => `-${props.slide * 50}vw`};
	}
	@media (max-width: 620px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
		left: ${(props) => `-${props.slide * 100}vw`};
	}
`;

const Content = styled.div`
	width: 25vw;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	@media (max-width: 1000px) {
		width: 80vw;
		flex-direction: row;
		justify-content: center;
		h1,
		p {
			flex: 1;
		}
	}
	h1 {
		font-weight: 400;
		padding-bottom: 20px;
	}
	p {
		font-size: 12px;
		line-height: 20px;
	}
`;

const Items = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;
