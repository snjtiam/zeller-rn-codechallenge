// RadioButton.tsx
import { useTheme } from "contexts/ThemeContext";
import React from "react";
import {
    Pressable,
    View,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
} from "react-native";

export type RadioButtonProps = {
    label?: string;
    selected: boolean;
    onPress?: () => void;

    /** Optional styling */
    color?: string; // border + fill color
    size?: number;  // outer circle size
    disabled?: boolean;

    style?: StyleProp<ViewStyle>;       // container (row)
    labelStyle?: StyleProp<TextStyle>;  // label text
    testID?: string;
};

const RadioButton = ({
    label,
    selected,
    onPress = () => { },
    color = "#007AFF",
    size = 24,
    disabled = false,
    style,
    labelStyle,
    testID,
}: RadioButtonProps) => {
    const outerRadius = size / 2;
    const innerSize = Math.round(size * 0.5);

    const { theme } = useTheme()

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            accessibilityRole="radio"
            accessibilityState={{ selected, disabled }}
            style={[styles.row, style]}
            testID={testID}
            hitSlop={10}
        >
            <View
                style={[
                    styles.outer,
                    {
                        width: size,
                        height: size,
                        borderRadius: outerRadius,
                        borderColor: selected ? theme.colors.primary : theme.colors.muted,

                    },
                ]}
            >
                {selected && (
                    <View
                        style={[
                            styles.inner,
                            {
                                width: innerSize,
                                height: innerSize,
                                borderRadius: innerSize / 2,
                                backgroundColor: color,
                            },
                        ]}
                    />
                )}
            </View>

            {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
        </Pressable>
    );
};

export default RadioButton

const styles = StyleSheet.create({
    row: { flexDirection: "row", alignItems: "center" },
    outer: {
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    inner: {},
    label: { marginLeft: 10, fontSize: 16 },
});
