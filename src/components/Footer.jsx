import React from 'react';
import styled from 'styled-components';
import footerData from './footerData';
import PrintFooterData from './PrintFooterData';

function Footer() {
	return (
		<Wrapper>
			<Container>
				<Email>
					<input type='text' placeholder='Email Address'></input>
					<br />
					<input type='checkbox' id='scales' name='scales' />
					<label for='scales'>
						Subscribe to receive communications from Aesop about our
						products and services. By subscribing, you confirm you have
						read and accept our<span> privacy policy</span>
					</label>
				</Email>
			</Container>
			{footerData.map((item) => {
				return (
					<Container>
						<PrintFooterData title={item.title} data={item.data} />
					</Container>
				);
			})}
			;
		</Wrapper>
	);
}

export default Footer;

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	background-color: #252525;
	color: #fffef2;
`;

const Email = styled.div`
	input[type='text'] {
		width: 100%;
		margin-bottom: 20px;
		font-size: 20px;
		background-color: #252525;
		color: #fffef2;
	}
	label {
		line-height: 30px;
		span {
			font-size: 18px;
			text-decoration: underline;
		}
	}
`;

const Container = styled.div`
	width: 350px;
	padding: 40px;
`;
