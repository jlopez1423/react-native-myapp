import React, {Component} from 'react';
import {AppRegistry, ListView, Platform, StyleSheet, Text, View} from 'react-native';

export default class Component5 extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds,

        }
    }

    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json)
            .then((response) => {
                this.setState({
                    userDataSource: this.state.userDataSource.cloneWithRows(response)
                })
            });
    }

    componentDidMount() {
        this.fetchUsers();
    }

    renderRow(user, sectionId, rowId, highlightRow) {
        return (
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}</Text>
            </View>
        );
    }


    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.userDataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }
});

AppRegistry.registerComponent('Component5', () => Component5);