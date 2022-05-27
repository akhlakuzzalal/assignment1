import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import Details from './src/pages/Details';
import Home from './src/pages/home';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    defaultFont: require('./assets/font/TiroDevanagariHindi-Regular.ttf'),
    italic: require('./assets/font/TiroDevanagariHindi-Italic.ttf'),
  });

  if (!loaded) {
    return null;
  }
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
