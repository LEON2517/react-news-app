import React, {Component} from 'react'
import Article from './Article/index.js'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'
import {loadAllArticles} from '../AC'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        console.log('---', 'rendering article list')
        const {openItemId, toggleOpenItem, articles} = this.props
        const articleElements = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleOpen={toggleOpenItem(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => {
    return {
        articles: filtratedArticlesSelector(state)
    }
}, {loadAllArticles})(accordion(ArticleList))