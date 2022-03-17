/**
 * @format
 * Changing
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import images from './src/config/images';

//  export default function App() {
//    return (
//      <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//    );
//  }

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/main';

AppRegistry.registerComponent(appName, () => App);
