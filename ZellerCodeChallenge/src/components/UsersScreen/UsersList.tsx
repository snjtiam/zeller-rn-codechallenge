import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Customer } from 'types/customerType'
import Text from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import UserAvatar from './UserAvatar'

type Props = {
    isLoading: boolean
    data: Customer[]
    title: string
}

type PropsUserItem = {
    data: Customer
}



const UserListItem = ({ data }: PropsUserItem) => {

    const { name, role, } = data
    const styles = useStyles()

    return (
        <View style={styles.containerItem} >
            <UserAvatar name={name} />
            <View style={styles.containerNameAndRole} >
                <Text type='secondary' >{name}</Text>
                <Text type='caption' style={styles.txtRole} >{role}</Text>
            </View>
        </View>
    )
}


const UsersList = (props: Props) => {
    const { data, title, isLoading, onRefresh } = props
    const styles = useStyles()
    const renderItem = ({ item }: { item: Customer }) => <UserListItem data={item} />
    return (
        <View>
            <Text type='title' >{title}</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                refreshing={isLoading}
                onRefresh={onRefresh}
                ListEmptyComponent={<Text type='secondary' style={styles.txtEmpty} >{'screen.users.users.nomatchingdata'}</Text>}
            />
        </View>

    )
}

export default UsersList


const useStyles = () => {
    const { theme } = useTheme()

    return StyleSheet.create({
        container: {

        },
        containerItem: {
            flexDirection: 'row',
            marginVertical: 4,
        },
        containerNameAndRole: {
            marginLeft: 8,
            flex: 1,
            justifyContent: 'space-around',
            paddingVertical: 4
        },
        txtName: {

        },
        txtRole: {
            color: theme.colors.textSecondary
        },
        txtEmpty: {
            paddingVertical: 100,
            alignSelf: 'center'
        }

    })
}