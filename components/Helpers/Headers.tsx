import { useTheme } from '@/constants/theme';
import { hp } from '@/helpers/common';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

const Headers = ({ text = "GST Invoice", add = true }: { text?: string, add?: boolean }) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            height: hp(7),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        text: {
            fontSize: 25,
            fontFamily: 'Poppins',
            color: theme.colors.primary,
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            {add && <Button color={theme.colors.primary} text={`Add ${text == "GST Invoice" ? 'Sale' : text}`} onClick={''} />}
        </View>
    )
}

export default Headers
