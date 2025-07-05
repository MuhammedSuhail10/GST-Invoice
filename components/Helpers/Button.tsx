import { useTheme } from '@/constants/theme'
import { wp } from '@/helpers/common'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Button = ({ color, text, onClick }: { color: string, text: string, onClick: string }) => {
    const theme = useTheme()
    const styles = StyleSheet.create({
        buttonContainer: {
            backgroundColor: color,
            paddingInline: wp(6),
            paddingBlock: 8,
            borderRadius: theme.borderRadius.sm
        },
        text: {
            color: theme.colors.primaryBg,
            fontFamily: 'Outfit'
        }
    })
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default Button
