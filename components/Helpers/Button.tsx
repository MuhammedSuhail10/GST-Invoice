import { useTheme } from '@/constants/theme'
import { wp } from '@/helpers/common'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ color, text, onClick }: { color: string, text: string, onClick?: string }) => {
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
    const addFn = () => {
        if (onClick) router.push(onClick as any);
    }
    return (
        <TouchableOpacity onPress={addFn} style={styles.buttonContainer}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
