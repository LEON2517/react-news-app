import React, { Component } from 'react'
import Article from '../Article'

class ArticlePage extends Component {

    render() {
        return <Article id={this.props.match.params.id} isOpen />
    }
}

export default ArticlePage