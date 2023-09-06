import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Main from './Main';
import Search from '../screens/Search';
import Chat from '../screens/Chat';
import About from '../screens/About';

function BottomMain() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} options={{
          headerShown : false ,
          tabBarActiveBackgroundColor : '#333',
          tabBarInactiveBackgroundColor : '#333' , 
          tabBarActiveTintColor : 'white' , 
        }}/>
      <Tab.Screen name="Search" component={Search} options={{tabBarVisible: false,}}/>
      <Tab.Screen name="Chat" component={Chat} options={{tabBarVisible: false,}}/>
      <Tab.Screen name="About" component={About} options={{tabBarVisible: false,}}/>
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default BottomMain