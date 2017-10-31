import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'


class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }),
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const {article, toggleOpen} = this.props

        return (
            <div>
                <h3 onClick={toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        return this.props.isOpen && (
            <div>
                <p>{this.props.article.text}</p>
                <CommentList comments = {this.props.article.comments}/>
            </div>
        )
    }
}

export default Article