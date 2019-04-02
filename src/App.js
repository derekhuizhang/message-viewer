import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './components/Header/index'

import MessageCard from './containers/MessageCard/index'

import {
	toggleView,
	changeFilterText
} from './actions/MessageViewActions'

import {
	MainContent,
	ShowTrashedButton,
	ShowUntrashedButton,
	FilterInput,
	FilterSubmitButton
} from './AppStyles'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			filterTextInput: ''
		}
	}
	
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		const { filterTextInput } = this.state
		
		const {
			messages,
			showTrashedMessages
		} = this.props.MessageView

		const {
			toggleView,
			changeFilterText
		} = this.props

		let numberStarred = 0
		let shownMessageCards = messages.map((item) => {
  		if ( (!item.meta.isTrashed && !showTrashedMessages)
  			|| (item.meta.isTrashed && showTrashedMessages)) {

  			if ( item.meta.isStarred ) {
  				numberStarred += 1
  			}

  			return ( 
  				<MessageCard 
  					key={item.id} 
  					data={item}
  					showTrashedMessages={showTrashedMessages}
  				/> 
  			)
  		}
  		return (null)
  	})
  	
    return (
      <div className="App">
        <Header/>
        <MainContent>
	        <h1
	        	style={{
	        		textAlign: 'left'
	        	}}
	        >
	        	Starred: { numberStarred }
	        </h1>
	        {
	        	showTrashedMessages ?
	        	<ShowUntrashedButton onClick={() => toggleView()}>
	        		Show Untrashed Messages
	        	</ShowUntrashedButton> :
	        	<div>
							<ShowTrashedButton onClick={() => toggleView()}>
			        	Showed Trashed Messages
			        </ShowTrashedButton>
			        <FilterInput 
		  	      	name='filterTextInput'
		    	    	value={filterTextInput}
		      	  	onChange={this.handleChange}
		      	  	placeholder='Enter text to filter...'
		        	/>
		        	<FilterSubmitButton
		        		onClick={() => changeFilterText(filterTextInput)}
		        	>
		       			Submit
		        	</FilterSubmitButton>
	        	</div>
	        }
	        { shownMessageCards }
        </MainContent>
      </div>
    );
	}
}

const mapStateToProps = (state) => ({
	MessageView: state.MessageViewReducer
})

const mapDispatchToProps = {
	toggleView,
	changeFilterText
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
