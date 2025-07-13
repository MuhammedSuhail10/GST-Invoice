import { useTheme } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Items = {
    id: string;
    name: string;
    hsn_code: string;
    price: string;
    unit: string;
};

const PrductCard = ({ item }: { item: Items }) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.secondaryBg,
            padding: 15,
            borderRadius: theme.borderRadius.md,
            marginBottom: 15,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: theme.borderRadius.md,
            elevation: 3,
        },
        flexContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
        },
        text: {
            fontFamily: 'Poppins',
            fontSize: 13,
            color: theme.colors.text,
        },
        customerName: {
            fontSize: 18.5,
            fontWeight: '600',
            color: theme.colors.primary,
        },
        dateText: {
            paddingInline: 5,
            fontSize: 12.5,
            backgroundColor: theme.colors.primary,
            color: theme.colors.primaryBg,
            borderRadius: theme.borderRadius.sm
        },
        label: {
            opacity: 0.7,
            fontSize: 14,
        },
        actionsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 12,
            borderTopWidth: 1,
            borderTopColor: 'rgba(0,0,0,0.1)',
        },
        actionButton: {
            padding: 8,
            borderRadius: theme.borderRadius.sm,
        },
        dataRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 4,
        },
        rateContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '30%',
            justifyContent: 'flex-end',
        },
        currency: {
            fontSize: 14,
            fontWeight: '500',
            marginRight: 2,
        },
        pressable: {
            borderRadius: theme.borderRadius.sm,
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <View style={{ width: '70%' }}>
                    <Text style={[styles.text, styles.customerName]} numberOfLines={1}>{item.name}</Text>
                </View>
            </View>
            <View style={styles.flexContainer}>
                <View style={{ width: '70%' }}>
                    <Text style={[styles.text, styles.label]}>Rate:</Text>
                </View>
                <View style={styles.rateContainer}>
                    <Text style={[styles.text, styles.currency]}>₹</Text>
                    <Text style={[styles.text]}> {item.price} </Text>
                </View>
            </View>
            <View style={styles.flexContainer}>
                <View style={{ width: '70%' }}>
                    <Text style={[styles.text, styles.label]}>Hsn Code:</Text>
                </View>
                <View style={styles.rateContainer}>
                    <Text style={[styles.text]}> {item.hsn_code} </Text>
                </View>
            </View>
        </View>
    );
};

export default PrductCard;