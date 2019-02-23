import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants, Location, Permissions } from 'expo'
import { MapView } from 'expo'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
    }
  }

  componentDidMount() {
    // this.setState({location: "30., 45."})
    this.getLocationAsync()
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  }


  render() {
    return (
      <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
      />
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
