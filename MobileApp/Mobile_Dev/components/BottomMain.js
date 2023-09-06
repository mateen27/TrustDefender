import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Main from "./Main";
import Search from "../screens/Search";
import Chat from "../screens/Chat";
import About from "../screens/About";

// Home Icon & Chat Image
import { Ionicons } from '@expo/vector-icons';
//Search Icon & user Image  
import { Feather } from '@expo/vector-icons';

function BottomMain() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "#111",
          tabBarInactiveBackgroundColor: "#333",
          tabBarActiveTintColor: "white",
          //   for adding the styles in the tabBar Text
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
          tabBarIcon : (() => {
            return <Ionicons name="home-outline" size={20} color="#ffffff" />
          })
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarVisible: false, //   for adding the styles in the tabBar Text
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
          tabBarActiveBackgroundColor: "#111",
          tabBarInactiveBackgroundColor: "#333",
          tabBarActiveTintColor: "white",
          tabBarIcon : (() => {
            return <Feather name="search" size={20} color="#ffffff" />
          })
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarVisible: false,
          //   for adding the styles in the tabBar Text
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
          tabBarActiveBackgroundColor: "#111",
          tabBarInactiveBackgroundColor: "#333",
          tabBarActiveTintColor: "white",
          tabBarIcon : (() => {
            return <Ionicons name="ios-chatbubble-ellipses-outline" size={20} color="#ffffff" />
          })
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarVisible: false,
          //   for adding the styles in the tabBar Text
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
          tabBarActiveBackgroundColor: "#111",
          tabBarInactiveBackgroundColor: "#333",
          tabBarActiveTintColor: "white",
          tabBarIcon : (() => {
            return <Feather name="user" size={20} color="#ffffff" />
          }) , 
        //   tabBarStyle : {paddingBottom : 0}
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default BottomMain;
