/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import codePush from 'react-native-code-push';
import Home from './src/components/home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Home />
        </View>
      </SafeAreaView>
    </>
  );
};

const codePushOptions = {
  checkFrequecny: codePush.CheckFrequency.ON_APP_RESUME,
};

export default codePush(codePushOptions)(App);
