import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './redux/store';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import HeaderTitle from './components/HeaderTitle'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const CategoryScreen = ({ route }) => {
  const { category } = route.params;
  return (
    <View>
      <Text>{category} Screen</Text>
    </View>
  );
};
const HomeStack = () => (
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

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
          </Tab.Navigator>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen
              name="Local News"
              component={CategoryScreen}
              initialParams={{ category: 'Local News' }}
              onPress={() => store.dispatch({ type: 'SET_CATEGORY', payload: 'Local News' })}
            />
            <Drawer.Screen
              name="Technology"
              component={CategoryScreen}
              initialParams={{ category: 'Technology' }}
              onPress={() => store.dispatch({ type: 'SET_CATEGORY', payload: 'Technology' })}
            />
            <Drawer.Screen
              name="Politics"
              component={CategoryScreen}
              initialParams={{ category: 'Politics' }}
              onPress={() => store.dispatch({ type: 'SET_CATEGORY', payload: 'Politics' })}
            />
            <Drawer.Screen
              name="Advertisement"
              component={CategoryScreen}
              initialParams={{ category: 'Advertisement' }}
              onPress={() => store.dispatch({ type: 'SET_CATEGORY', payload: 'Advertisement' })}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
