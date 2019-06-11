import { createStackNavigator } from 'react-navigation';
import Home from './../src/components/home/home';
import Rooms from './../src/components/rooms/rooms';
import RoomDetails from './../src/components/roomDetails/roomDetails';
import Patient from './../src/components/patients/patient';



const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Rooms: { screen: Rooms },
  RoomDetails: { screen: RoomDetails },
  Patient: { screen: Patient }
});

export default AppNavigator;
