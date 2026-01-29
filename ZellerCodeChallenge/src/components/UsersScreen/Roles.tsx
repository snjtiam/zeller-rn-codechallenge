import { View, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from 'components/Text'
import RadioButton from 'components/RadioButton'
import { useTheme } from 'contexts/ThemeContext'

type Props = {
    title: string
    data: string[]
    selectedRole: string
    onPressRole: (value: string) => void
}

type PropsRoleItem = {
    data: string
    isSelected: boolean
    onPress: (value: string) => void
}

const RoleItem = ({ data, isSelected, onPress }: PropsRoleItem) => {
    const styles = useStyles(isSelected)
    return (
        <Pressable onPress={() => onPress(data)} >
            <View style={styles.containerItem} >
                <RadioButton disabled selected={isSelected} />
                <Text style={styles.txtRoleItem} >{data}</Text>
            </View>
        </Pressable >
    )
}

const Roles = (props: Props) => {

    const { title, data, selectedRole, onPressRole } = props
    const styles = useStyles()

    const renderItem = ({ item }: { item: string }) => <RoleItem data={item} isSelected={selectedRole === item} onPress={onPressRole} />
    return (
        <View>
            <Text type='title' >{title}</Text>
            <FlatList
                contentContainerStyle={styles.contentContainer}
                data={data}
                renderItem={renderItem}
            />
        </View>

    )
}

export default Roles

const useStyles = (isRoleSelected?: boolean) => {


    const { theme } = useTheme()

    return StyleSheet.create({
        contentContainer: {
        },
        containerItem: {
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            paddingHorizontal: 8,
            marginVertical: 4,
            borderRadius: 8,
            backgroundColor: isRoleSelected ? theme.colors.surface : 'white'
        },
        txtRoleItem: {
            marginLeft: 8
        }
    })
}