import React, { Component } from 'react'
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import { exp } from 'react-native-reanimated';

const TABS = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: "最热",
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialIcons
                    name={"whatshot"}
                    fontSize={26}
                    style={{
                        color: tintColor
                    }}
                />
            )
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={'md-trending-up'}
                    fontSize={26}
                    style={{
                        color: tintColor
                    }}
                />
            )
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialIcons
                    name={'favorite'}
                    fontSize={26}
                    style={{
                        color: tintColor
                    }}
                />
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => (
                <Entypo
                    name={'user'}
                    fontSize={26}
                    style={{
                        color: tintColor
                    }}
                />
            )
        }
    }
}

/**
 * 动态导航器
 */
export default class DynamicTabNavigator extends Component {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
    }

    _tabNavigator() {
        const { PopularPage, TrendingPage, FavoritePage, MyPage } = TABS
        const tabs = { PopularPage, TrendingPage, FavoritePage, MyPage };
        PopularPage.navigationOptions.tabBarLabel = "最冷"
        return createAppContainer(
            createBottomTabNavigator(
                tabs,
                {
                    tabBarComponent: TabBarCompnent
                }
            )
        )
    }

    render() {
        const Tab = this._tabNavigator()
        return <Tab />
    }
}

class TabBarCompnent extends Component {
    constructor(props) {
        super(props)
        //这是创建tabBar时的默认主题
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        }
    }

    render() {
        //每次点击每个tab时，会走到这里，routes代表所有tab，index是当前tab
        const { routes, index } = this.props.navigation.state;
        //只有调用了setParams的tab的params才有值，其他都是undefined，但是因为
        //把新的theme保存了下来，所以当点击其他tab时，其他tab主题也会改变。
        if (routes[index].params) {
            //从设置的param中取出theme
            const { theme } = routes[index].params
            //updateTime标记防止被之前设置的覆盖掉
            if (theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme
            }
        }
        return <BottomTabBar
            //保留之前属性
            {...this.props}
            //覆盖属性
            activeTintColor={this.theme.tintColor || this.props.tintColor}
        />
    }
}