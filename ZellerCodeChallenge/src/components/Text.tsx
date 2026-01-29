import { Text as RNText, StyleProp, TextStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { typography } from '../typography/typography'
import { t } from 'i18next'

type Props = {
    type?: "title" | "section" | "body" | "secondary" | "caption"
    children?: ReactNode
    style?: StyleProp<TextStyle>
}

const Text = (props: Props) => {
    const { children, style, type = "body" } = props

    const derivedChildren = typeof children === 'string' ? t(children) : children

    const defaultStyle = typography[type]

    const textProps = {
        ...props,
        style: [defaultStyle, style],
    }
    return (
        <RNText allowFontScaling maxFontSizeMultiplier={1.2} {...textProps} >{derivedChildren}</RNText>
    )
}

export default Text