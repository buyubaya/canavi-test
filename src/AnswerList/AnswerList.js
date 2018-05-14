import React, { Component } from 'react';
import './AnswerList.css';
import { connect } from 'react-redux';
import { Answer } from '../Functions/dispatch.js';

class AnswerList extends Component {
	conmponentDidMount(){
		this.clicked = false;
	}
	handleClick(item){
		if( !this.clicked ){
			this.clicked = true;
			
			if( this.props.current <= this.props.limit ){
				if( item === this.props.question.time_to_display ){
					Answer.bind(this)(true);
				}
				else {
					Answer.bind(this)(false);
				}
			}
			else {
				console.log('FINISH');
			}
		}
		else {
			console.log('CLICKED');
		}
	}
	render() {
		return (
			<div className="optionsArea">
                <h2 className="ttl">What time is it ?</h2>
                <ul>
                {
                    this.props&&this.props.question&&this.props.question.options.map((item,index) => {
                    return <li key={ index } onClick={ () => { this.handleClick(item) } } >{ item }</li>
                })	
                }
                </ul>
            </div>
		)
	}
}

export default connect(state => {
	return {question: state.questions.list[state.questions.current], current: state.questions.current, limit: state.questions.limit};
})(AnswerList);