/**
 * @format
 */

import {AppRegistry,StatusBar,YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Theme from './Theme';
StatusBar.setBackgroundColor(Theme.bgColor);
StatusBar.setBarStyle('dark-content');
YellowBox.ignoreWarnings(['Warning:']);
AppRegistry.registerComponent(appName, () => App);
