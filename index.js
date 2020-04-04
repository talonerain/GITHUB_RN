/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import WelcomePage from './js/page/WelcomePage'
import 'react-native-gesture-handler';
import AppNavigators from './js/Navigator/AppNavigator'

AppRegistry.registerComponent(appName, () => AppNavigators);
