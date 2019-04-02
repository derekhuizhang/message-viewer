import { messagesObject } from '../messages'

export const getMessages = () => {
	const { messages } = messagesObject

	return {
		type: 'GET_MESSAGES',
		messages	
	}
}

export const toggleView = () => {
	return { type: 'TOGGLE_VIEW' }
}

export const changeFilterText = ( filterText ) => {
	return {
		type: 'CHANGE_FILTER_TEXT',
		filterText
	}
}

export const toggleStarred = ( id ) => {
	return { 
		type: 'TOGGLE_STARRED',
		id
	}
}

export const toggleTrashed = ( id ) => {
	return { 
		type: 'TOGGLE_TRASHED',
		id
	}
}