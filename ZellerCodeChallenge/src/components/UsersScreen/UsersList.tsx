import { View, FlatList } from 'react-native'
import React from 'react'
import { Customer } from '../../types/customerType'
import Text from 'components/Text'

type Props = {
    data: Customer[]
    title: string
}

const UserListItem = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}


const UsersList = (props: Props) => {
    const { data, title } = props
    return (
        <View>
            <Text type='title' >{title}</Text>
            <FlatList
                data={data}
                renderItem={UserListItem}
            />
        </View>

    )
}

export default UsersList