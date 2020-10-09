import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class FetchDemoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showText: ''
        }
    }
    loadDate() {
        //https://api.github.com/search/repositories?q=java
        let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
        fetch(url)
            .then(repsonse => repsonse.text())
            .then(responseText => {
                this.setState({
                    showText: responseText
                })
            })
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Fetch 使用
                </Text>
                <TextInput style={styles.input}
                    onChangeText={text => {
                        this.searchKey = text
                    }}
                />
                <Button
                    title={'获取'}
                    onPress={() =>
                        this.loadDate()
                    }
                />
                <Text>
                    {this.state.showText}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10
    },
    input_container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})