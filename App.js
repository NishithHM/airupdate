/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
