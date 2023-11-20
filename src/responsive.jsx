export const sizes = {
	desktop: 992,
	tablet: 768,
	phone: 375,
};
  
export const Device = {
	desktop: `(max-width: ${sizes.desktop}px)`,
	tablet: `(max-width: ${sizes.tablet}px)`,
	phone: `(max-width: ${sizes.phone}px)`,
};


import styled from 'styled-components';

const StyledComponent = styled.div`
  color: blue;

	@media ${Device.tablet} {
		
	}

	@media ${Device.phone} {
		
	}

	@media ${Device.desktop} {

	}
`;

// import { Device } from '../../responsive'
