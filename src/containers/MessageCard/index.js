import React, { Component } from 'react';
import moment from 'moment'
import { connect } from 'react-redux'
import Highlight from 'react-highlighter'

import {
	MessageCardWrapper,
	RightSection,
	MiddleSection,
	LeftSection,
	StarredMessageButton,
	StarMessageButton,
	TrashMessageButton,
	UntrashMessageButton,
	AvatarImage,
	AvatarCaption
} from './styles'

import {
	toggleStarred,
	toggleTrashed
} from '../../actions/MessageViewActions'


class MessageCard extends Component {
	render() {
		const {
			handle,
			avatar,
			timestamp,
			source,
			content,
			id,
			meta
		} = this.props.data

		const {
			toggleTrashed,
			toggleStarred,
			showTrashedMessages
		} = this.props

		const {
			filterText
		} = this.props.MessageView
		
		const timestampString = new moment(timestamp).format('MMM Do, YYYY')
		
		const formattedSource = (
			<p
				style={{
					marginTop: '20px',
					color: '#696969',
					marginBottom: '0px'
				}}
			>
				{source} | {timestampString}
			</p>
		)

		const formattedContent = (
			<p
				style={{
					marginTop: '10px'
				}}
			>
				<Highlight search={ meta.isTrashed ? '' : filterText }>{content}</Highlight>
			</p>
		)

		return (
			<MessageCardWrapper>
				<LeftSection>
					<AvatarImage src={avatar} />
					<AvatarCaption>{handle}</AvatarCaption>
				</LeftSection>
				<MiddleSection>
					{ formattedSource }
					{ formattedContent }
				</MiddleSection>
				<RightSection>
					{ meta.isStarred ? 
						<StarredMessageButton onClick={() => toggleStarred(id)}>
							Starred
						</StarredMessageButton> : 
						<StarMessageButton onClick={() => toggleStarred(id)}> 
							Star Message!
						</StarMessageButton>
					}
					{ showTrashedMessages ?
						<UntrashMessageButton onClick={() => toggleTrashed(id)}>
							Untrash
						</UntrashMessageButton> :
						<TrashMessageButton onClick={() => toggleTrashed(id)}>
							Trash
						</TrashMessageButton>
					}	
				</RightSection>
			</MessageCardWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	MessageView: state.MessageViewReducer
})

const mapDispatchToProps = {
	toggleStarred,
	toggleTrashed
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageCard)