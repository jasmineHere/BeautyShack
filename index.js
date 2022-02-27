/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { StackNavigator } from 'react-navigation';
AppRegistry.registerComponent(appName, () => App);
