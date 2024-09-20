import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { CalculatorScreen } from './src/presentation/screens/CalculatorScreen';
import { styles } from './src/config/theme/app-theme';


 function App() {
  return (
    <View style={ styles.background}>
      <CalculatorScreen/>
      <StatusBar style="light" />
    </View>
  ); 
}

export default App;
