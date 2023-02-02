import { StyleSheet, View } from 'react-native'
import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import IntroScreen from './src/screens/IntroScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  const [isloded, setIsLoded] = useState(false)
  setTimeout(() => {
    setIsLoded(true)
  }, 3000)
  return (
    <NavigationContainer>
      <View style={styles.container}>
      {/* {isloded ? <Details/> : <IntroScreen />} */}
    </View>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Details" component={Details}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    // flex:1,
    // backgroundColor:'white'
  }
})