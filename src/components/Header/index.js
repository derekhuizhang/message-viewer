import React from 'react'

import {
	HeaderWrapper,
	SignafireLogoWrapper,
	SignafireLogo,
	PageNameWrapper,
	PageName
} from './styles'

import logo from '../../assets/logo.png'

const Header = () => (
	<HeaderWrapper>
		<SignafireLogoWrapper>
			<SignafireLogo src={logo} />
		</SignafireLogoWrapper>
		<PageNameWrapper>
			<PageName>
				MESSAGE VIEWER
			</PageName>
		</PageNameWrapper>
	</HeaderWrapper>
)

export default Header