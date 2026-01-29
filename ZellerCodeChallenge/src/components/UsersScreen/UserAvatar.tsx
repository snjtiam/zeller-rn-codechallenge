import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from 'contexts/ThemeContext'
import Text from 'components/Text'

type Props = {
  name: string
}

const UserAvatar = (props: Props) => {
  const { name } = props

  const styles = useStyles()

  const initial = name && name.trim().length > 0 ? name.trim()[0].toUpperCase() : '';
  return (
    <View style={styles.container} >
      <Text type='title' style={styles.txtInitial} >{initial}</Text>
    </View>
  )
}

export default UserAvatar


const useStyles = () => {
  const { theme } = useTheme()

  return StyleSheet.create({
    container: {
      height: 50,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      backgroundColor: theme.colors.surface
    },
    txtInitial: {
      color: theme.colors.primary
    }
  })
}