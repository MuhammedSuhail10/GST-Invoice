import { useTheme } from '@/constants/theme';
import { hp } from '@/helpers/common';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from './Button';

const Headers = ({ text = "Invoixa", add = true, onClick }: { text?: string, add?: boolean, onClick?: string }) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            height: hp(6),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        text: {
            width: '60%',
            fontSize: 25,
            fontFamily: 'Poppins',
            color: theme.colors.primary,
        }
    })
    return (
        <View style={styles.container}>
            {add ?
                <>
                    <Text style={styles.text}>{text}</Text>
                    <Button color={theme.colors.primary} text={`Add ${text == "GST Invoice" ? 'Sale' : text}`} onClick={onClick} />
                </>
                : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/images/icon.png')}
                        style={{ width: 60, height: 60 }}
                        resizeMode="contain"
                    />
                    <Text style={styles.text}>Invoixa</Text>
                </View>
            }

        </View>
    )
}

export default Headers
