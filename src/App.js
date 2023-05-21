import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './redux/store';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import HeaderTitle from './components/HeaderTitle';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function CategoryDetailScreen({ route }) {
  const { category } = route.params;
  return (
    <View>
      <Text>{category} Screen</Text>
    </View>
  );
}

function MainScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <HeaderTitle />,
        }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{
          headerTitle: () => <HeaderTitle />,
        }}
      />
    </Stack.Navigator>
  );
}

function Sidebar() {
  return (
    <View>
      {['Local News', 'Technology', 'Politics', 'Advertisement'].map((category) => (
        <Text key={category} onPress={() => store.dispatch({ type: 'SET_CATEGORY', payload: category })}>{category}</Text>
      ))}
    </View>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={Sidebar}drawerPosition="right">
      <Drawer.Screen name="Home" component={MainScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={DrawerNavigator}   options={{
                headerTitle: () => <HeaderTitle />,
              }}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;