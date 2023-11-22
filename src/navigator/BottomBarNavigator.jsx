import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../views/HomeScreen';
import ProfileScreen from '../views/UserTab/ProfileScreen';
import CreatePostScreen from '../views/UserTab/CreatePostScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export const BottomBarNavigator = () =>{
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => <Icon name="home-outline" size={size} color={color} />
        }} />
     
      <Tab.Screen 
      name="Post" 
      component={CreatePostScreen}
      options={{
        title: "Post",
        tabBarIcon: ({ color, size }) => <Icon name="image-outline" size={size} color={color} />
    }}
       />
      <Tab.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{
        title: "Perfil",
        tabBarIcon: ({ color, size }) => <Icon name="person-circle-outline" size={size} color={color} />
    }}
    
    />
    </Tab.Navigator>
  );
}