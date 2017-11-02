import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import articles from './articles'
import comments from './comments'
import filters from './filters'

export default combineReducers({
    articles,
    filters,
    comments,
    router
})