import { View, } from 'react-native'
import React from 'react'
import useViewmodel from './UsersScreen.viewmodel'
import { Roles, UsersList } from 'components'
import { t } from 'i18next'
import useStyles from './UserScreen.styles'
import { SafeAreaView } from 'react-native-safe-area-context'

const UsersScreen = () => {
  const { onPressRole, onRefresh, onChangeSearchValue, isLoading, selectedRole, rolesList, usersList } = useViewmodel()

  const styles = useStyles()

  return (
    <SafeAreaView style={styles.safeAreaView}  >
      <View style={styles.container} >
        <Roles onPressRole={onPressRole} selectedRole={selectedRole} title="screen.users.roles.header" data={rolesList} />
        <UsersList onChangeSearchValue={onChangeSearchValue} isLoading={isLoading} title={t('screen.users.users.header', { role: selectedRole })} data={usersList} onRefresh={onRefresh} />
      </View>
    </SafeAreaView>
  )
}

export default UsersScreen