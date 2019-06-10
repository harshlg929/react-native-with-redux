import { createStackNavigator } from 'react-navigation';
import Home from './../src/components/home/home';
import Rooms from './../src/components/rooms/rooms';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Rooms: { screen: Rooms},
});

export default AppNavigator;
