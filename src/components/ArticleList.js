import React, {Component} from 'react'
import Loader from './Loader'
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
        const {loaded, loading, loadAllArticles} = this.props
        if (!loading && !loaded) loadAllArticles()
    }

    render() {
        console.log('---', 'rendering article list')
        const {openItemId, toggleOpenItem, articles, loading} = this.props

        if (loading) return <Loader/>

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
        articles: filtratedArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}, {loadAllArticles})(accordion(ArticleList))