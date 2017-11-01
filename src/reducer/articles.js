import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS } from '../constants'
import {arrToMap} from './utils'
import {Map, Record} from 'immutable'

const ArticleRecord = Record({
    id: null,
    title: null,
    text: null,
    date: null,
    comments: []
})

const ReducerRecord = Record({
    entities: arrToMap([], ArticleRecord),
    loading: false,
    loaded: false
})

const defaultState = ReducerRecord()

export default (state = defaultState, action) => {
    const { type , payload, randomId, response } = action;

    switch (type) {
        case DELETE_ARTICLE:
            return state.deleteIn(['entities', payload.id]);

        case ADD_COMMENT:
            return state.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId))

        case LOAD_ALL_ARTICLES + START:
            return state.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return state
                .set('entities', arrToMap(response, ArticleRecord))
                .set('loading', false)
                .set('loaded', true)
    }

    return state
}