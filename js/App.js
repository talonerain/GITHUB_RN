import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './navigator/AppNavigators'
import store from './store'

export default class App extends Component {
    render() {
        /**
         * 将store传给app框架
         */
        return <Provider store={store}>
            <AppNavigator />
        </Provider>
    }
}