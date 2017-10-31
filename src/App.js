import React, {Component} from 'react'
import ArticleList from './components/ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

export default class App extends Component {
    state = {
        selected: null
    }

    handleSelectionChange = selected => this.setState({ selected })

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <h1>React News App</h1>
                    <Select options = {options}
                            value = {this.state.selected}
                            onChange = {this.handleSelectionChange}
                            multi={true}
                    />
                    <ArticleList articles = {articles}/>
                </div>
            </div>
        )
    }

}