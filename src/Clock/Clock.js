import React, { Component } from 'react';
import './Clock.css';
import { connect } from 'react-redux';
import AnswerList from '../AnswerList/AnswerList'; 

class Clock extends Component {
	render() {
		let time = this.props&&this.props.question&&this.props.question.time_to_display;
		if(time){
			time = time.split(':');
			var hour = time[0]*1;
			let minute = time[1]*1;

			let deg_minute = minute/60;
			let deg_hour = (hour + deg_minute)/12;

			var hourStyle = {transform: `rotate(${ 360*deg_hour }deg)`};
			var minuteStyle = {transform: `rotate(${ 360*(minute/60) }deg)`};
		}
		else {
			console.log('Time Undefined');
		} 
		
		return (
			<div className="contentArea">
				<div className={'clock' + (hour>12?' pm':'')}>
					<div className="arrow_hour" style={hourStyle}></div>
					<div className="arrow_minute" style={minuteStyle}></div>
				</div>
				<AnswerList />
			</div>
		)
	}
}

export default connect(state => {
	return {question: state.questions.list[state.questions.current]};
})(Clock);