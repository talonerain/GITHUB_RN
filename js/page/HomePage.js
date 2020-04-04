import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomePage extends Component {
    _tabNavigator() {
        return createAppContainer(
            createBottomTabNavigator({
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
                },
            })
        )
    }
    render() {
        const Tab = this._tabNavigator();
        return <Tab />;
    }
}
