import { useTheme } from "contexts/ThemeContext"
import { StyleSheet } from "react-native"

const useStyles = () => {
    const { theme } = useTheme()

    return StyleSheet.create({
        safeAreaView: { flex: 1 },
        container: {
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 16,
            backgroundColor: theme.colors.background
        }
    })
}

export default useStyles