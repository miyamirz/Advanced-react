import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
	state = { comment: '' };

	componentDidMount() {
		if (!this.props.auth) {
			this.shouldNavigateAway();
		}
	}
	componentDidUpdate() {
		if (!this.props.auth) {
			this.shouldNavigateAway();
		}
	}
	shouldNavigateAway() {
		this.props.history.push('/');
	}

	handleChange = event => {
		this.setState({ comment: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ comment: '' });
		this.props.saveComment(this.state.comment);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h4>Add a Comment</h4>
					<textarea
						onChange={this.handleChange}
						value={this.state.comment}
					/>
					<div>
						<button>Submit Comment</button>
					</div>
				</form>
				<button onClick={this.props.fetchComments}>
					Fetch Comments
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}
export default connect(
	mapStateToProps,
	actions
)(CommentBox);
