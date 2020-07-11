import Type from '../../action/types'

const defaultStyle = {
    theme: 'red'
}

/**
 * 根据aciton修改state并返回一个新的state，返回后store发生变化，回调mapStateToProps方法
 * @param {*} state 
 * @param {*} action 
 */
export default function onAction(state = defaultStyle, action) {
    switch (action.type) {
        case Type.THEME_CHANGE:
            return { ...state, theme: action.theme1 }
        default:
            return state;
    }
}