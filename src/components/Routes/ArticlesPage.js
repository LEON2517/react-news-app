import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import ArticlePage from './ArticlePage'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {

    render() {
        return(
            <div>
                <ArticleList/>
                <Route path="/articles/:id" component={ArticlePage}/>
            </div>
        )
    }
}

export default ArticlesPage