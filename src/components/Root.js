import React, {Component} from 'react'
import ArticleList from './ArticleList'
import Filters from './Filters'

export default class Root extends Component {
    render() {
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <h1>React News App</h1>
                    <Filters articles = {[]}/>
                    <ArticleList/>
                </div>
            </div>
        )
    }
}