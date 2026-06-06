import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
export default function TabLayout() {
  return (
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#f4f1f0',
        headerStyle: {
          backgroundColor: '#2a4047',
        },
        headerShadowVisible: false,
        headerTintColor: '#f8f3f3',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}