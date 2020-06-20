import React, { Component } from 'react';
import DynamicTabNavigator from '../Navigator/DynamicNavigator';
import NavigationUtil from '../Navigator/NavigationUtil';

export default class HomePage extends Component {
    render() {
        //解决导航器割裂问题，HomePage是在导航器之外的，所以HomePage可以跳转到其他页面，因此将
        //HomePage的navigation赋值给NavigationUtil，用来跳转
        NavigationUtil.navigation = this.props.navigation
        return <DynamicTabNavigator />;
    }
}
