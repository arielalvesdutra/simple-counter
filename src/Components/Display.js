import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default props => {
    return     (
        <View>
            <Text style={styles.displayText}>
                {props.counter}
            </Text>
        </View>
    )
}

styles = StyleSheet.create({
    displayText: {
        fontSize: 60,
        fontWeight: 'bold'
    }
})