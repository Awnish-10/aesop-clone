import React from 'react';
import styled from 'styled-components';

function Banner() {
	return (
		<Wrapper>
			<h1>
				Enjoy complimentary carbon neutral shipping on orders over $400
			</h1>
		</Wrapper>
	);
}

export default Banner;

const Wrapper = styled.div`
	background-color: #252525;

	h1 {
		color: #fffef2;
		font-size: 14px;
		font-weight: 400;
		padding: 20px 0;
		text-align: center;
	}
`;
