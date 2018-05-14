import React, { Component } from 'react';
import './Alert.css';
import { connect } from 'react-redux';

class Alert extends Component {
	render() {
		let show = this.props&&this.props.isAlert&&this.props.isAlert.show;
		let result = show&&this.props.isAlert.result;
		return (
			show&&
			(result?
			<h2 className="alert">CORRECT</h2>
			:<h2 className="alert error">INCORRECT</h2>)
		)
	}
}

export default connect(state => {
	return {isAlert: state.status.isAlert};
})(Alert);
