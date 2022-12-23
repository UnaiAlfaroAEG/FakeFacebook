import { StyleSheet, Text, View,StatusBar,ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import react from 'react';
import Groups from './screens/Groups';
import Friends from './screens/Friends';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';


const App = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          swipeEnabled:true,
          showIcon:true,
          showLabel: false,
          activeTintColor: '#3a86e9',
          inactiveTintColor: '#9F9F9F'
        }}
        screenOptions={({route})=>({
          tabBarIcon: ({focused,color,size}) =>{
            let iconName;
            if(route.name === 'Home') iconName = 'home'
            else if (route.name === 'Friends') iconName = 'account-multiple-outline'
            else if (route.name === 'Groups') iconName = 'account-group'
            else if (route.name === 'Profile') iconName = 'account-circle-outline'
            else if (route.name === 'Notifications') iconName = 'bell-outline'
            else if (route.name === 'Menu') iconName = 'menu'
            return <MaterialCommunityIcons name={iconName} size={26} color={color} />;
          },
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Friends' component={Friends} />
        <Tab.Screen name='Groups' component={Groups} />
        <Tab.Screen name='Profile' component={Profile} />
        <Tab.Screen name='Notifications' component={Notifications} />
        <Tab.Screen name='Menu' component={Menu} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}
export default App;


