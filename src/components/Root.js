import React, {Component} from 'react'
import ArticlesPage from './Routes/ArticlesPage'
import Filters from './Filters'
import {Route, Link, Switch} from 'react-router-dom'

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
                    <Switch>
                        <Route path="/filters" component={Filters}/>
                        <Route path="/articles/new" render={this.getArticleForm}/>
                        <Route path="/articles" component={ArticlesPage}/>
                    </Switch>
                </div>
            </div>
        )
    }

    getArticleForm = () => <h2>New Article form</h2>
}