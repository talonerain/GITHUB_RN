import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import WelcomPage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage'
import FetchDemoPage from '../page/FetchDemoPage'

const InitNavigator = createStackNavigator(
    {
        WelcomPage: {
            screen: WelcomPage,
            navigationOptions: {
                header: null, //隐藏头部
            }
        }
    }
)

const MainNavigator = createStackNavigator(
    {
        HomePage: {
            screen: HomePage,
            navigationOptions: {
                header: null, //隐藏头部
            }
        },
        DetailPage: DetailPage,
        FetchDemoPage: {
            screen: FetchDemoPage,
            navigationOptions: {
                //header: null, //隐藏头部
            }
        }
    }
)

export default createAppContainer(createSwitchNavigator({
    //首个Navigator即默认展示的页面
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        header: null
    }
}))