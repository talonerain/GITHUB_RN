import { combineReducers } from 'redux'
//含义是将默认export的内容命名为themeTes
import theme from './theme'

/**
 * 合并reducer
 */
const index = combineReducers({
    theme: theme
})
export default index;