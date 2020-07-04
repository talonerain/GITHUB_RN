import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NavigationUtil from '../navigator/NavigationUtil';

export default class WelcomePage extends Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            //定时跳转到首页
            NavigationUtil.resetToHomePage(this.props)
        }, 2000);
    }

    componentWillMount() {
        //页面销毁时清空计时器，否则可能会内存泄漏
        this.timer && clearTimeout(this.timer)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    WelcomePage
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})