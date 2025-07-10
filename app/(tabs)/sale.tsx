import { useTheme } from '@/constants/theme';
import { hp } from '@/helpers/common';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SaleData from './../../components/Sale/SaleData';

const Sale = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        bg: {
            backgroundColor: theme.colors.primaryBg,
            flex: 1,
        },
        container: {
            height: hp(100),
            backgroundColor: theme.colors.primaryBg,
            padding: 15,
        },
    })
    return (
        <SafeAreaView style={styles.bg}>
            <StatusBar style='dark' />
            <View style={styles.container}>
                <SaleData />
            </View>
        </SafeAreaView>
    )
}

export default Sale;
