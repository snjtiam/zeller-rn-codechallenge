import { View, StyleSheet, Button } from 'react-native'
import React from 'react'
import { Text } from 'components'
import { useTheme } from 'contexts/ThemeContext'

type Props = {}

const ErrorFallbackScreen = () => {

    const styles = useStyles()
    return (
        <View style={styles.container}  >
            <Text type='title' style={styles.txtTitle} >Opps!</Text>
            <Text type='section' style={styles.txtSubtitle} >There's an error</Text>
        </View>
    )
}

export default ErrorFallbackScreen

const useStyles = () => {
    const { theme } = useTheme()
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background
        },
        txtTitle: {
            fontSize: 32,
            lineHeight: 32 * 1.2
        }, txtSubtitle: {
            fontSize: 24,
            lineHeight: 24 * 1.2
        },

    })
}