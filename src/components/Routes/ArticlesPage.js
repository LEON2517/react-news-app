import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import Article from '../Article'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {

    render() {
        return(
            <div>
                <ArticleList path={this.props.match.path} />
                <Route path={`${this.props.match.path}/:id`} children={this.getArticle}/>
            </div>
        )
    }

    getArticle = ({match}) => {
        console.log('match', match)
        if (!match) return <h2>Please select article</h2>
        return <Article id={match.params.id} isOpen key={match.params.id} />
    }
}

export default ArticlesPage