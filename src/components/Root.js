import React, {Component} from 'react'
import ArticleList from './ArticleList'
import Filters from './Filters'
import {Route, Link} from 'react-router-dom'

export default class Root extends Component {
    render() {
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <div><Link to="/filters">filters</Link></div>
                    <div><Link to="/articles">articles</Link></div>
                </div>
                <div>
                    <h1>React News App</h1>
                    <Route path="/filters" component={Filters}/>
                    <Route path="/articles" component={ArticleList}/>
                </div>
            </div>
        )
    }
}