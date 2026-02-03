import { View, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useTheme } from 'contexts/ThemeContext'
import { typography } from '../typography/typography'

type Props = {
    placeholder: string
    onChangeText: (value: string) => void
    onSearch?: () => void
}

const SearchInput = (props: Props) => {
    const { placeholder, onSearch, onChangeText } = props
    const styles = useStyles()
    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor={styles.txtPlaceholderColor.color}
                style={styles.txtInput} placeholder={placeholder} onChangeText={(text) => onChangeText(text)} />
            {onSearch && <Button
                title="Search"
                onPress={onSearch}
            />}
        </View>
    )
}

export default SearchInput

const useStyles = () => {
    const { theme } = useTheme()

    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 10,
            padding: 10,
            marginVertical: 10,
        },
        txtInput: {
            flex: 1,
            color: theme.colors.text,
            ...typography.body,
        },
        txtPlaceholderColor: {
            color: theme.colors.textSecondary,
        }
    })
}