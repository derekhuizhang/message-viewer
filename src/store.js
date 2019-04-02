import { createStore } from 'redux'
import IndexReducer from './reducers/index'
import { getMessages } from './actions/MessageViewActions'

const store = createStore(IndexReducer)

store.dispatch(getMessages())

export default store