import { BackgroundColor } from 'chalk';
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadorScreen } from './src/screens/calculadorScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor={"black"} barStyle="light-content" />
      <CalculadorScreen />
    </SafeAreaView>
  )
}


export default App;