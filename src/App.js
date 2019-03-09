import React, { Component } from 'react'
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native'

export default class App extends Component {

    state = {
        counter: 0
    }

    sum = () => {
        this.setState({ state: this.state.counter + 1})
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
                    <Text style={styles.displayText}>
                        {this.state.counter}
                    </Text>
                </View>
                <View style={styles.buttons} >
                    <Button title="Limpar" 
                            color="red" 
                            onPress={() => { this.setState({ counter: 0 }) }}
                            />
                    <Button title="Acrescentar"                   color="green"
                            onPress={() => { this.setState({ counter: this.state.counter + 1 }) }}
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
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
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
    displayText: {
        fontSize: 60,
        fontWeight: 'bold'
    }
})
