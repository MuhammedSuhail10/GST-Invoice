import { useTheme } from '@/constants/theme';
import TokenService from '@/helpers/token';
import { refresh_token } from '@/services/authService';
import { useFocusEffect, useRouter } from 'expo-router';
import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import Headers from '../Helpers/Headers';
import Search from '../Helpers/Search'; // Import the new Search component
import { hp } from './../../helpers/common';
import { fetchProduct } from './../../services/productService';
import PrductCard from './ProductCard';

interface Product {
    id: string;
    name: string;
    hsn_code: string;
    price: string;
    unit: string;
}

const ProductData = () => {
    const router = useRouter()
    const theme = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [datas, setDatas] = useState<Product[]>([]);
    const [token, setToken] = useState('');

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

    const fetchProducts = async (token: string) => {
        const response = await fetchProduct(token);
        if (response.status != 200) {
            if (response.status == 401) {
                const refreshToken = TokenService.getRefreshToken();
                const tokenResponse = await refresh_token({ refreshToken });
                console.log(tokenResponse)
                if (tokenResponse.status != 200) router.push('/login');
                TokenService.saveName(response.data.name);
                let accesstoken = TokenService.saveToken(response.data.access)
                // if (!access_token) { setSnackKey(Date.now()); setSnackVisible(true); setError("Something went wrong. Try again."); TokenService.deleteAllData(); return; }
                let refreshtoken = TokenService.saveRefreshToken(response.data.refresh);
                // if (!refresh_token) { setSnackKey(Date.now()); setSnackVisible(true); setError("Something went wrong. Try again."); TokenService.deleteAllData(); return; }
                const retryResponse = await fetchProduct(tokenResponse.data.access);
            }
            // setSnackKey(Date.now());
            // setSnackVisible(true);
            // setError(response.message || "Please try again later");
            // Try again
        }
        setDatas(response.data);
    }

    useFocusEffect(
        useCallback(() => {
            const loadData = async () => {
                try {
                    const storedToken = await TokenService.getToken();
                    if (!storedToken) {
                        router.replace('/login');
                        return;
                    }
                    setToken(storedToken);
                    await fetchProducts(storedToken);
                } catch (error) {
                    console.error('Error loading data:', error);
                    router.replace('/login');
                }
            };

            loadData();
        }, [])
    );

    const filteredData = useMemo(() => {
        if (!searchQuery.trim()) {
            return datas;
        }
        return datas.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, datas]);

    const ListHeader = () => (
        <View>
            <Headers text='Product' onClick='/addProduct' />
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
                renderItem={({ item }) => <PrductCard item={item} />}
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