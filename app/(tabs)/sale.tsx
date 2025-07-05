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
        container: {
            // flex: 1,
            height: hp(100),
            backgroundColor: theme.colors.primaryBg,
            padding: 15,
        },
    })
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light' />
            <View style={{ height: hp(100), marginBottom: hp(10) }}>
                <SaleData />
            </View>
        </SafeAreaView>
    )
}

export default Sale;
