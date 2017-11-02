import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import Article from '../Article'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {

    render() {
        return(
            <div>
                <ArticleList path={this.props.match.path} />
                <Route path={`${this.props.match.path}/:id`} render={this.getArticle}/>
            </div>
        )
    }

    getArticle = ({match}) => {
        console.log('---', match)
        return <Article id={match.params.id} isOpen />
    }
}

export default ArticlesPage