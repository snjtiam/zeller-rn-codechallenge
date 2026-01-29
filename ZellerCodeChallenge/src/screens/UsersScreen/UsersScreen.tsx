import { View, } from 'react-native'
import React from 'react'
import useViewmodel from './UsersScreen.viewmodel'
import { Roles, UsersList } from '../../components'
import { t } from 'i18next'
import useStyles from './UserScreen.styles'
import { SafeAreaView } from 'react-native-safe-area-context'

const Users = () => {
  const { onPressRole, selectedRole, rolesList, usersList } = useViewmodel()

  const styles = useStyles()

  return (
    <SafeAreaView style={styles.safeAreaView}  >
      <View style={styles.container} >
        <Roles onPressRole={onPressRole} selectedRole={selectedRole} title="screen.users.roles.header" data={rolesList} />
        <UsersList title={t('screen.users.users.header', { role: 'Admin' })} data={usersList} />
      </View>
    </SafeAreaView>
  )
}

export default Users