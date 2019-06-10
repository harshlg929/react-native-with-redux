import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRoom } from './../../actions/roomActions';

class Rooms extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Rooms here!</Text>
        {
          this.props.friends.possible.map((room, index) => (
            <Button
              key={ room }
              title={ `Add ${ room }` }
              onPress={() =>
                this.props.addRoom(index)
              }
            />
          )
        )
        }
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addRoom,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);