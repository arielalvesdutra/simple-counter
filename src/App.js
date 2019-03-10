import React, { Component } from 'react'
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native'

import Display from './Components/Display'

export default class App extends Component {

    state = {
        counter: 0
    }

    clearCounter = () => {
        this.setState({ counter: 0 })
    }

    increaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <Text style={styles.title}>
                        Contador
                    </Text> 
                </View>
                <View style={styles.display} >
                    <Display counter={this.state.counter} />
                </View>
                <View style={styles.buttons} >
                    <Button title="Limpar"
                        color="red"
                        onPress={this.clearCounter}
                    />
                    <Button title="Acrescentar"
                        color="green"
                        onPress={this.increaseCounter}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    display: {
        alignItems: 'center',
        flex: 2,
        justifyContent: 'center',
    },
    buttons: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
})
