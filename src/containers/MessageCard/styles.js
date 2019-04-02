import styled from 'styled-components'

export const MessageCardWrapper = styled.div`
	border: 2px solid #CCCCCC;
	margin: auto;
	margin-top: 20px;
	margin-bottom: 20px;
	display: flex;
`

export const LeftSection = styled.div`
	flex: 0 0 150px;
	text-align: left;
`
export const MiddleSection = styled.div`
	flex-grow: 1;
	text-align: left;
`
export const RightSection = styled.div`
	vertical-align: top;
	flex: 0 0 250px;
	text-align: right;
`

export const StarMessageButton = styled.button`
	background-color: white;
	border: 1px solid #CCCCCC;
	margin: 10px;
	padding: 10px;
`

export const StarredMessageButton = styled.button`
	background-color: #C7A011;
	margin: 10px;
	color: white;
	border: none;
	padding: 10px;
`

export const AvatarImage = styled.img`
	margin: 20px;	
`
export const AvatarCaption = styled.p`
	text-align: center;
`

export const TrashMessageButton = styled.button`
	background-color: #ff4007;
	color: #ffffff;
	border: 0px;
	float: right;
	display: block;
	text-align: right;
	margin: 10px;
	margin-left: 0px;
	padding: 10px;
`

export const UntrashMessageButton = styled.button`
	background-color: white;
	color: black;
	border: 1px solid #CCCCCC;
	float: right;
	display: block;
	text-align: right;
	margin: 10px;
	margin-left: 0px;
	padding: 10px;
`