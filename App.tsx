/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Home } from './src/screens/Home';
import theme from './style/theme';



const App = () => {

  return (
    <ThemeProvider theme={theme}>
          <SafeAreaView style={styles.safeAreaStyle}>
            <Home/>
          </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaStyle:{
    backgroundColor: theme.colors.primaryBackground,
    flex:1
  }
});

export default App;
