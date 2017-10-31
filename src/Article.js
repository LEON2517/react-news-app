import React, {Component} from 'react'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {
        const {article} = this.props

        return (
            <div>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
            </div>
        )
    }

}

export default Article