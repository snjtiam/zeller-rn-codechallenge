import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import UsersScreen from 'screens/UsersScreen/UsersScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Users" component={UsersScreen} />
        </Tab.Navigator>
    );
}

export default Tabs