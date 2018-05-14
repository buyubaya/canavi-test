import React, { Component } from 'react';
import './App.css';
import Clock from './Clock/Clock';
import Alert from './Alert/Alert';
import Result from './Result/Result';
import Spinner from './Spinner/Spinner';
import { connect } from 'react-redux';
import { Start } from './Functions/dispatch.js';

class App extends Component {
	componentDidMount(){
		// fetch('https://time-learner.herokuapp.com/questions')
		// .then(res => res.json())
		// .then(json => {
		// 	let { dispatch } = this.props;
		// 	dispatch({type: 'IS_LOADING', param: false});
		// })
		// .catch(err => console.log(err));
	}
	start(){
		let { dispatch } = this.props;
		Start(dispatch);
	}
	render() {
		return (
			this.props&&this.props.status&&this.props.status.isStart
			?
			<React.Fragment>
				<Alert></Alert>
				{
					this.props.status.isFinish
					?
					<Result></Result>
					:
					<Clock></Clock>
				}
			</React.Fragment>
			:
			<div className="preLoadingArea">
				<h1 className="ttl">Time Learner</h1>
				{
				this.props&&this.props.status&&this.props.status.isLoading
				?
				<Spinner />
				:
				<button className="btnStart" onClick={ this.start.bind(this) }>Start game</button>
				}
			</div>
		)
	}
}

export default connect(state => {
	return {status: state.status};
})(App);
