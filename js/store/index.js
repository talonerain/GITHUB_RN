import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducer'

/**
 * 日志打印中间件
 * @param {d} store 
 */
const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatching a function')
    } else {
        console.log('dispatching', action)
    }
    const result = next(action);
    console.log('nextState', store.getState());
    return result
}
const middlewares = [
    logger,
    thunk
]

export default createStore(reducers, applyMiddleware(...middlewares))