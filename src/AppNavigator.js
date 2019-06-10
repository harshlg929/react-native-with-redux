import { createStackNavigator } from 'react-navigation';
import Home from './../src/components/home/home';
import Friends from './../src/components/friends/friends';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends},
});

export default AppNavigator;
