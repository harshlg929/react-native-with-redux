import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>We have { this.props.friends.current.length } Rooms!</Text>
        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Rooms')
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

export default connect(mapStateToProps)(Home);