import React, {Component} from 'react'
import ArticleList from './components/ArticleList'
import Select from 'react-select'
import Filters from './components/Filters'

export default class App extends Component {
    render() {
        const {articles} = this.props
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <h1>React News App</h1>
                    <Filters articles = {articles}/>
                    <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                </div>
            </div>
        )
    }
}