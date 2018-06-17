import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from './requireAuth';
import styles from './styles.css';
import * as actions from '../actions';

class CommentBox extends Component {
	state = { comment: '' };

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
						<button className="submit">Submit Comment</button>
					</div>
				</form>
				<button
					className="fetch"
					onClick={this.props.fetchComments}
				>
					Fetch Comments
				</button>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(requireAuth(CommentBox));
