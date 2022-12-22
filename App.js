import { StyleSheet, Text, View,StatusBar,ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import react from 'react';
import Header from './components/Header'

const App = () => {
  return (
    <>
    <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content">
    </StatusBar>
    <ScrollView>
      <Header></Header>
    </ScrollView>
    </>
  );
}
export default App;


