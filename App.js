
import { Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Home from './Screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectList from './Screens/Projectlist';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"  component={Home} />
        <Stack.Screen name="ProjectList"  component={ProjectList} options={({ route }) => {
          return (
            {
              title: route.params.title,
              headerStyle: { backgroundColor: route.params.color },
              headerTintColor: "white"
            }
          )
        }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


