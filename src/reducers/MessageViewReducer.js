const initialState = {
	messages: [],
	filterText: '',
	showTrashedMessages: false
}

const MessageViewerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_MESSAGES':
			return {
				...state,
				messages: action.messages
			}
		case 'TOGGLE_VIEW':
			console.log('hello')
			return {
				...state,
				showTrashedMessages: !state.showTrashedMessages
			}
		case 'CHANGE_FILTER_TEXT':
			return {
				...state,
				filterText: action.filterText
			}
		case 'TOGGLE_STARRED':
			let starredIndex = state.messages.findIndex(item => item.id === action.id)
			state.messages[starredIndex].meta.isStarred = !state.messages[starredIndex].meta.isStarred
			return { ...state }
		case 'TOGGLE_TRASHED':
			let trashedIndex = state.messages.findIndex(item => item.id === action.id)
			state.messages[trashedIndex].meta.isTrashed = !state.messages[trashedIndex].meta.isTrashed
			return { ...state }
		default:
			return state
	}
}

export default MessageViewerReducer