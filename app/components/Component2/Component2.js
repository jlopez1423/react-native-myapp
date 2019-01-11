import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';

export default class Component2 extends Component {
    render() {
        return (
            <View>
                <View style={styles.myView}>
                    <Text style={styles.myText}>Hello Jose</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.v1}>
                        <Text>View 1</Text>
                    </View>
                    <View style={styles.v2}>
                        <Text>View 2</Text>
                    </View>
                    <View style={styles.v3}>
                        <Text>View 3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'blue'
    },
    myText: {
        color: 'white'
    }
});

AppRegistry.registerComponent('Component2', () => Component2);