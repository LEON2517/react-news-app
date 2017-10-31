import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import CSSTransion from 'react-addons-css-transition-group'
import './style.css'

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
                <CSSTransion
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppearTimeout={500}
                    transitionAppear
                    component="section"
                >
                    {this.getBody()}
                </CSSTransion>
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