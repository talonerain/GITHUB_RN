import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import WelcomPage from '../page/WelcomePage';
import HomePage from '../page/HomePage';

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
        }
    }
)

export default createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        header: null
    }
}))