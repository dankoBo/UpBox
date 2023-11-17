import styled from 'styled-components'

const StyledButton = styled.button`
	padding: 22px 67px;
	border-radius: 300px;
	border: 4px solid #EF8094;
	background: #FFFFFF;
	display: flex;
	align-items: center;
	cursor: pointer;

	color: #000000;
	font-family: DM Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 1.92px;
	text-transform: uppercase;

	&:hover {
		animation: pulse 1s infinite;
  		transition: .3s;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		70% {
			transform: scale(.9);
		}
		100% {
			transform: scale(1);
		}
	}
`

export default StyledButton