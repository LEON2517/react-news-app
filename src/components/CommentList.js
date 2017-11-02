import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import Loader from './Loader'
import CommentForm from './CommentForm'
import {connect} from 'react-redux'
import {loadArticleComments} from '../AC'
import LocalizedText from './LocalizedText'

class CommentList extends Component {
    static defaultProps = {
        comments: [],
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static contextTypes = {
        user: PropTypes.string
    }

    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }


    render() {

        const {isOpen, toggleOpen} = this.props;

        const text = this.props.isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick={toggleOpen}><LocalizedText>{text}</LocalizedText></button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: {comments, id, commentsLoading, commentsLoaded}, isOpen } = this.props
        if (!isOpen) return null
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id}/></li>)}
            </ul>
        ) : <h3><LocalizedText>No comments yet</LocalizedText></h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {id}/>
            </div>
        )
    }
}

export default connect(null, { loadArticleComments }, null, {pure: false})(toggleOpen(CommentList))