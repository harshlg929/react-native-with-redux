import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from "./../../../styles/style";
import { HeaderBackButton } from 'react-navigation';
import { WHITE, BLUE, GREEN, GREYSHADE } from './../../../util/color-constants';

export default class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: WHITE,
    headerStyle: {
      backgroundColor: BLUE,
      elevation: 0,
      borderBottomWidth: 0,
      shadowOpacity: 0,
    },
    // headerLeft: (<HeaderBackButton tintColor={WHITE} onPress={() => { navigation.goBack() }} />),
    headerTitle: <View style={styles.HeaderView}><Text style={styles.HeaderText}>Home Page</Text></View>
  });

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const roomInfo = navigation.getParam('roomInfo', 'NA');
    this.roomInformation = roomInfo;
  }
  render() {
    const { navigation } = this.props;
    const roomInfo = navigation.getParam('roomInfo', 'NA');
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => {
              this.props.navigation.navigate('Rooms')
            }}>
              <Text>List Of Rooms</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => {
              this.props.navigation.navigate('Patient')
            }}>
              <Text>List Of Patients</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
