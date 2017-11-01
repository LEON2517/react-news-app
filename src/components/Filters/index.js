import React, { Component } from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'

class Filters extends Component {

    render() {
        const {articles} = this.props
        return (
            <div>
                <SelectFilter articles = {articles}/>
                <DateRange />
            </div>
        )
    }
}

export default Filters