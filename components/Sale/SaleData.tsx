import { useTheme } from '@/constants/theme';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Headers from '../Helpers/Headers';
import { hp } from './../../helpers/common';
import Card from './../Helpers/Card';

const SaleData = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            paddingBottom: hp(10)
        },
        emptyContainer: { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: hp(80), backgroundColor: theme.colors.primaryBg },
        emptyText: { fontSize: 16, color: theme.colors.text, fontFamily: 'Poppins' }
    })
    const data = [
        {
            id: '1',
            name: "Muhammed",
            age: 25,
        },
        {
            id: '2',
            name: "Muhammed",
            age: 25,
        },
        {
            id: '3',
            name: "Muhammed",
            age: 25,
        },
        {
            id: '4',
            name: "Muhammed",
            age: 25,
        },
        {
            id: '5',
            name: "Muhammed",
            age: 25,
        },
        {
            id: '6',
            name: "Muhammed",
            age: 25,
        },
        {
            id: '7',
            name: "Muhammed",
            age: 25,
        },
    ];
    return (
        <View>
            <FlatList
                data={data}
                ListHeaderComponent={<Headers />}
                renderItem={({ item }) => <Card />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.container}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No data available</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default SaleData