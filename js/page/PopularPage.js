import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import NavigationUtil from '../Navigator/NavigationUtil'

export default class PopularPage extends Component {
    constructor(props) {
        super(props)
        this.tabNames = ['java', 'android', 'ios', 'react', 'react native', 'php']
    }
    _genTabs() {
        //声明一个对象
        const tabs = {}
        this.tabNames.forEach((item, index) => {
            //${index}：引用变量，`不变的html${变量}`代替传统的引号与加号拼接
            //创建路由，[]里面是唯一的路由名，每个路由有对应的页面(Screeen)
            tabs[`tab${index}`] = {
                //箭头函数，=>前面是参数，后面是返回值
                screen: props => <PopularTab {...props} tabLabel={item} />,
                navigationOptions: {
                    title: item
                }
            }
        })
        return tabs
    }

    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
            this._genTabs(), {
            tabBarOptions: {
                tabStyle: styles.tabStyle,
                upperCaseLabel: false,
                scrollEnabled: true,
                style: {
                    backgroundColor: '#a67'
                },
                indicatorStyle: styles.indicatorStyle,
                labelStyle: styles.labelStyle
            }
        }
        ));
        return <View style={styles.container}>
            <TabNavigator />
        </View>
    }
}

class PopularTab extends Component {
    render() {
        return <View style={styles.container}>
            <Text>PopularTab</Text>
            <Text onPress={
                () => {
                    NavigationUtil.goPage({}, 'DetailPage')
                }
            }>跳转到详情页</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center'
    },
    tabStyle: {
        minWidth: 50
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6
    }
})