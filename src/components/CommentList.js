import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpne from '../decorators/toggleOpen'


class CommentList extends Component {
    static defaultProps = {
        comments: []
    }


    render() {

        const {isOpen, toggleOpen} = this.props;

        const text = this.props.isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null

        return comments.length ? (
            <ul>
                {this.commentElement}
                {comments.map(comment =>
                    <li key = {comment.id}><Comment comment = {comment}/></li>)}
            </ul>
        ) : <h3>No comment yet</h3>
    }
}

export default toggleOpne(CommentList)