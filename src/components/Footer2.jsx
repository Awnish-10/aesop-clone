import React from 'react';
import styled from 'styled-components';

function Footer2() {
	return (
		<Wrapper>
			<h2>© Aesop</h2>
		</Wrapper>
	);
}

export default Footer2;

const Wrapper = styled.div`
	width: 100%;
	background-color: #252525;
	color: #fffef2;
	h2 {
		font-weight: 400;
		padding: 30px;
	}
	border-top: 3px solid white;
`;
