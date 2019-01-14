import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View} from 'react-native';

export default class myapp extends Component {
    render() {
        return (
            <View>
                <Text>Component6</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Component6', () => Component6);