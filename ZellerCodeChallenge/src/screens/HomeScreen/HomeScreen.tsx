import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from 'components'

type Props = {}

const HomeScreen = (props: Props) => {

    const styles = useStyles()
    return (
        <View style={styles.container} >
            <Text type='title' >HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
}