import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import Loader from '../Loader'
import CSSTransion from 'react-addons-css-transition-group'
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle, loadArticleById} from '../../AC'

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

    componentWillReceiveProps(nextProps) {
        if(nextProps.isOpen && !this.props.isOpen) nextProps.loadArticle()
    }

    render() {
        const {article, toggleOpen, deleteArticle} = this.props

        return (
            <div>
                <h3 onClick={toggleOpen}>{article.title}</h3>
                <button onClick={deleteArticle}>delete</button>
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
        const {article, isOpen} = this.props
        if (!isOpen) return null

        if (article.loading) return <Loader />

        return this.props.isOpen && (
            <div>
                <p>{this.props.article.text}</p>
                <CommentList article = {this.props.article}/>
            </div>
        )
    }

}

export default connect(null, (dispatch, ownProps) => ({
    deleteArticle: () => dispatch(deleteArticle(ownProps.article.id)),
    loadArticle: () => dispatch(loadArticleById(ownProps.article.id))
}), null, {pure: false})(Article)