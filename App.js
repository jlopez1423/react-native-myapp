import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View} from 'react-native';

import Component6 from "./app/components/Component6/Component6";

export default class myapp extends Component {
    render() {
        return (
            <View>
                <Component6 />
            </View>
        );
    }
}

AppRegistry.registerComponent('myapp', () => myapp);