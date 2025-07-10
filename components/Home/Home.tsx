import { useTheme } from '@/constants/theme';
import TokenService from '@/helpers/token';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QuickLinks from './QuickLinks';
import Summary from './Summary';

const HomeSection = () => {
    const name = TokenService.getName();
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            padding: 5,
            marginTop: 10,
        },
        text: {
            color: theme.colors.text,
            fontSize: 15,
            fontFamily: 'Poppins',
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome, {name}</Text>
            <View style={{ marginVertical: 5 }}>
                <Summary />
            </View>
            <View style={{ marginVertical: 5 }}>
                <QuickLinks />
            </View>
        </View>
    )
}

export default HomeSection
