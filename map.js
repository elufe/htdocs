import React from 'react';
import { StyleSheet, Text, View, WebView, MapView } from 'react-native';

export default class map=(props)=>{
  render() {
    return (
      <MapView
        style={styles.map}
         showsUserLocation = {false}
         followUserLocation = {false}
         zoomEnabled = {true}
      />

    );
  }
}

const styles = StyleSheet.create({
  map:{
    height:400,
    marginTop:80
  }
});
