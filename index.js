/**
 * @format
 */

import {AppRegistry,StatusBar,YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Theme from './Theme';
StatusBar.setBackgroundColor(Theme.highlightColor);
StatusBar.setBarStyle('light-content');
YellowBox.ignoreWarnings(['Warning:']);
AppRegistry.registerComponent(appName, () => App);
