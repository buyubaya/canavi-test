import React, { Component } from 'react';
import './Result.css';
import { connect } from 'react-redux';
import { RESET } from '../reducer/const.js';
import { Start } from '../Functions/dispatch.js';

class Result extends Component {
	playAgain(){
		let { dispatch } = this.props;
		let list = this.props&&this.props.list;
		let oldQuestions = JSON.parse(localStorage.getItem('oldQuestions')) || [];
		oldQuestions = oldQuestions.concat(list);
		localStorage.setItem('oldQuestions', JSON.stringify(oldQuestions));
		dispatch({type: RESET});
		Start(dispatch);
	}
	render() {
		return (
			<div className="resultArea">
				<h2 className="ttl">Great job !</h2>
				<h3 className="subttl">You got { this.props.correct } point(s)</h3>			
				<button className="btnPlayAgain" onClick={ this.playAgain.bind(this) }>PLAY AGAIN</button>
			</div>
		)
	}
}

export default connect(state => {
	return {correct: state.questions.correct, list: state.questions.list};
})(Result);
