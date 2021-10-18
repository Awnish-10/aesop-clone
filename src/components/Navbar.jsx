import React from 'react';
import styled from 'styled-components';

function Navbar() {
	return (
		<Wrapper>
			<Left>
				<h2>Shop</h2>
				<h2>read</h2>
				<h2>Stores</h2>
				<h2>Search</h2>
			</Left>
			<Right>
				<h2>Login</h2>
				<h2>Cart</h2>
			</Right>
		</Wrapper>
	);
}

export default Navbar;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	font-size: 14px;
	border-bottom: 1px solid grey;
`;
const Left = styled.div`
	flex: 3;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	@media (max-width: 700px) {
		display: none;
	}

	h2 {
		padding: 0 10px;
		cursor: pointer;

		:hover {
			text-decoration: underline;
		}
	}
`;

const Right = styled.div`
	flex: 2;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	h2 {
		padding: 0 10px;
		cursor: pointer;

		:hover {
			text-decoration: underline;
		}
	}
`;
