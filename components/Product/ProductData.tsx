import { useTheme } from '@/constants/theme';
import React, { useMemo, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import Headers from '../Helpers/Headers';
import Search from '../Helpers/Search'; // Import the new Search component
import { hp } from './../../helpers/common';
import Card from './../Helpers/Card';

const ProductData = () => {
    const theme = useTheme();
    const [searchQuery, setSearchQuery] = useState('');

    const styles = StyleSheet.create({
        container: {
            paddingBottom: hp(12.5),
            alignSelf: 'center',
        },
        emptyContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: hp(80),
            backgroundColor: theme.colors.primaryBg
        },
        emptyText: {
            fontSize: 16,
            color: theme.colors.text,
            fontFamily: 'Poppins'
        }
    });

    const data = [
        {
            id: '1',
            customerName: "Muhammed",
            date: "2024-06-01",
            totalRate: "1000",
            totalQuantity: "5",
        },
        {
            id: '2',
            customerName: "Ahmed",
            date: "2024-06-02",
            totalRate: "1200",
            totalQuantity: "3",
        },
        {
            id: '3',
            customerName: "Sarah",
            date: "2024-06-03",
            totalRate: "900",
            totalQuantity: "4",
        },
        {
            id: '4',
            customerName: "Ali",
            date: "2024-06-04",
            totalRate: "1500",
            totalQuantity: "6",
        },
        {
            id: '5',
            name: "Fatima",
            age: 22,
            customerName: "Fatima",
            date: "2024-06-05",
            totalRate: "800",
            totalQuantity: "2",
        },
        {
            id: '6',
            name: "Omar",
            age: 27,
            customerName: "Omar",
            date: "2024-06-06",
            totalRate: "1100",
            totalQuantity: "7",
        },
        {
            id: '7',
            name: "Aisha",
            age: 32,
            customerName: "Aisha",
            date: "2024-06-07",
            totalRate: "950",
            totalQuantity: "3",
        },
    ];

    const filteredData = useMemo(() => {
        if (!searchQuery.trim()) {
            return data;
        }
        return data.filter(item =>
            item.customerName.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const ListHeader = () => (
        <View>
            <Headers text='Product' />
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </View>
    );

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
            <FlatList
                data={filteredData}
                ListHeaderComponent={<ListHeader />}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>
                            {searchQuery ? 'No results found' : 'No data available'}
                        </Text>
                    </View>
                )}
            />
        </KeyboardAvoidingView>
    );
};

export default ProductData;