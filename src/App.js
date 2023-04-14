import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './redux/store';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ArticleScreen from './screens/ArticleScreen';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Import the Icon component
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HeaderTitle = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
            source={require('../assets/baseImage.png')} // Replace with the path to your logo
            style={{ width: 150, height: 30, resizeMode: 'contain' }}
        />
        <Text style={styles.text}>news.ai</Text>
    </View>
);

const headerTitleOptions = {
    headerTitle: (props) => <HeaderTitle />,
    headerRight: (props) => (
        <TouchableOpacity onPress={() => { }} style={{ marginRight: 15 }}>
            <Ionicons name="menu" size={25} color="#fff" />
        </TouchableOpacity>
    ),
    headerStyle: {
        backgroundColor: '#041635',
        height: 130,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerTitleContainerStyle: {
        left: 0,
        right: 0,
    },
};

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerTitle: '',
                headerStyle: {
                    height: 0,
                },
            }} />
            <Stack.Screen name="Article" component={ArticleScreen} options={{
                headerTitle: '',
            }} />
        </Stack.Navigator>
    );
}

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused ? 'home' : 'home-outline';
                            } else if (route.name === 'Settings') {
                                iconName = focused ? 'settings' : 'settings-outline';
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#47abff',
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name="Home" component={HomeStack} options={headerTitleOptions}  />
                    <Tab.Screen name="Settings" component={SettingsScreen} options={headerTitleOptions} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    text: {
        // fontFamily: 'Poppins',
        fontSize: 24,
        color: '#ffffff',
    },
});

export default App;
