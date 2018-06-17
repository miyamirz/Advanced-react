import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import { Route, Link } from 'react-router-dom';
import CommentList from './CommentList';
import * as actions from '../actions';
import styles from './styles.css';

class App extends Component {
	renderButton() {
		if (this.props.auth) {
			return (
				<button
					className="button"
					onClick={() => this.props.changeAuth(false)}
				>
					Sign out
				</button>
			);
		} else {
			return (
				<button
					className="button"
					onClick={() => this.props.changeAuth(true)}
				>
					Sign in
				</button>
			);
		}
	}
	renderHeader() {
		return (
			<div>
				<ul className="header">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="post">Post</Link>
					</li>
					<li>{this.renderButton()}</li>
				</ul>
			</div>
		);
	}
	render() {
		return (
			<div>
				{this.renderHeader()}
				<Route path="/post" component={CommentBox} />
				<Route path="/" exact component={CommentList} />
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
)(App);
