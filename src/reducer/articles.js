import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from '../constants'
import {arrToMap} from './utils'
import {Map, Record} from 'immutable'

const ArticleRecord = Record({
    id: null,
    title: null,
    text: null,
    date: null,
    comments: []
})

const defaultState = arrToMap([], ArticleRecord)

export default (state = defaultState, action) => {
    const { type , payload, randomId, response } = action;

    switch (type) {
        case DELETE_ARTICLE:
            return state.delete(payload.id);

        case ADD_COMMENT:
            return state.updateIn([payload.articleId, 'comments'], comments => comments.concat(randomId))

        case LOAD_ALL_ARTICLES:
            return arrToMap(response, ArticleRecord)
    }

    return state
}