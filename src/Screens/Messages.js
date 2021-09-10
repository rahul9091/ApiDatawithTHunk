//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Messages = () => {
    return (
        <View style={styles.container}>
            <Text style={{color:'white'}}>Welcome to The Messages</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2D3038',
    },
});

//make this component available to the app
export default Messages;
