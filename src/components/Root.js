import React, {Component} from 'react'
import ArticlesPage from './Routes/ArticlesPage'
import Filters from './Filters'
import CommentsPage from './Routes/CommentsPage'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import NotFoundPage from './Routes/NotFoundPage'

export default class Root extends Component {
    render() {
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <div><NavLink to="/filters" activeStyle ={{color: 'red'}}>filters</NavLink></div>
                    <div><NavLink to="/articles" activeStyle ={{color: 'red'}}>articles</NavLink></div>
                    <div><NavLink to="/comments" activeStyle ={{color: 'red'}}>comments</NavLink></div>
                </div>
                <div>
                    <h1>React News App</h1>
                    <Switch>
                        <Redirect from="/" exact to="/articles"/>
                        <Route path="/filters" component={Filters}/>
                        <Route path="/articles/new" render={this.getArticleForm}/>
                        <Route path="/article" to="/articles"/>
                        <Route path="/articles" component={ArticlesPage}/>
                        <Route path='/comments' component={CommentsPage}/>
                        <Route path="*" component={NotFoundPage}/>
                    </Switch>
                </div>
            </div>
        )
    }

    getArticleForm = () => <h2>New Article form</h2>
}