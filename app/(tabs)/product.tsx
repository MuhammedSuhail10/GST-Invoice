import Headers from '@/components/Helpers/Headers';
import { useTheme } from '@/constants/theme';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Product = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.primaryBg,
            padding: 15
        },
    })
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light' />
            <Headers text='Product' />
        </SafeAreaView>
    )
}

export default Product;

const styles = StyleSheet.create({})