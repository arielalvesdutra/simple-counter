import React, { Component } from 'react'
import {
    AsyncStorage,
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

    componentDidMount = () => AsyncStorage.getItem('COUNTER').then(
        (value) => {
            if (value) {
                this.setState({ 'counter': parseInt(value) })
            }
        })

    clearCounter = async () => {
        this.setState({ counter: 0 })
        await AsyncStorage.setItem('COUNTER', String(0))
    }

    increaseCounter = async () => {
        let counter = this.state.counter + 1
        this.setState({ counter: counter})

        await AsyncStorage.setItem('COUNTER', String(counter))
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
                    <Button title="Zerar"
                        color="gray"
                        onPress={this.clearCounter}
                    />
                    <Button title="Acrescentar"
                        color="gray"
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
        alignItems: 'flex-start',
        flex: 2,
        flexDirection: 'row',
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
