import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default props => {
    return     (
        <View style={styles.container}>
            <Text style={styles.displayText}>
                {props.counter}
            </Text>
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#999',
        backgroundColor: '#666',
        height: '80%',
        justifyContent: 'center',
        width: '80%',
    },
    displayText: {
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold'
    }
})