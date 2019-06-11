import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRoom } from './../../actions/roomActions';
import { HeaderBackButton } from 'react-navigation';
import styles from './../../../styles/style';
import { WHITE, BLUE, GREEN, GREYSHADE } from './../../../util/color-constants';

class Rooms extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: WHITE,
        headerStyle: {
            backgroundColor: BLUE,
            elevation: 0,
            borderBottomWidth: 0,
            shadowOpacity: 0,
        },
        headerLeft: (<HeaderBackButton tintColor={WHITE} onPress={() => { navigation.goBack() }} />),
        headerTitle: <View style={styles.HeaderView}><Text style={styles.HeaderText}>View Patients</Text></View>
    });
    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={Platform.OS === 'android' ? 82 : 0} style={{ flex: 1, backgroundColor: BLUE }} enabled>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }} keyboardShouldPersistTaps='always' >

                    <View style={styles.container}>
                        {
                            this.props.rooms.totalRooms.map((room, index) => (
                                <TouchableOpacity
                                    key={room.roomNo}
                                    style={styles.roomButton}
                                    onPress={() => {
                                        this.props.navigation.navigate('RoomDetails', { roomInfo: room })
                                    }}
                                >
                                    <Text style={styles.ButtonText}>
                                        {room.patientName}
                                    </Text>
                                </TouchableOpacity>
                            )
                            )
                        }
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() =>
                                this.props.navigation.navigate('Home')
                            }>
                            <Text style={styles.ButtonText}>
                                Back to Home
                                </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state) => {
    const { rooms } = state
    return { rooms }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addRoom,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);