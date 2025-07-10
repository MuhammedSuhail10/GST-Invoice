import { useTheme } from '@/constants/theme';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from './../../assets/icons/index';
import Button from './Button';

type Items = {
    id: string;
    customerName: string;
    date: string;
    totalRate: string;
    totalQuantity: string;
};

const Card = ({ item }: { item: Items }) => {
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
            paddingInline: 2,
            fontSize: 12.5,
            opacity: 0.6,
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
                    <Text style={[styles.text, styles.customerName]} numberOfLines={1}>{item.customerName}</Text>
                </View>
                <View style={{ width: '30%', alignItems: 'flex-end', paddingInline: 5 }}>
                    <Text style={[styles.text, styles.dateText]}>{item.date}</Text>
                </View>
            </View>
            <View style={styles.flexContainer}>
                <View style={{ width: '70%' }}>
                    <Text style={[styles.text, styles.label]}>Total Rate:</Text>
                </View>
                <View style={styles.rateContainer}>
                    <Text style={[styles.text, styles.currency]}>₹</Text>
                    <Text style={[styles.text]}> {item.totalRate} </Text>
                </View>
            </View>
            <View style={styles.dataRow}>
                <View style={{ width: '70%' }}>
                    <Text style={[styles.text, styles.label]}>Total Quantity:</Text>
                </View>
                <View style={{ width: '30%', alignItems: 'flex-end', paddingInline: 5 }}>
                    <Text style={[styles.text]}> {item.totalQuantity}</Text>
                </View>
            </View>
            <View style={styles.actionsContainer}>
                <View style={styles.flexContainer}>
                    <Text># {item.id}</Text>
                </View>
                <View style={styles.flexContainer}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.actionButton,
                            styles.pressable,
                            { opacity: pressed ? 0.7 : 1 }
                        ]}
                    >
                        <Icon name="share" color={theme.colors.primary} size="24" />
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [
                            styles.actionButton,
                            styles.pressable,
                            { opacity: pressed ? 0.7 : 1 }
                        ]}>
                        <Icon name="download" color={theme.colors.primary} size="24" />
                    </Pressable>
                    <TouchableOpacity>
                        <Button color={theme.colors.primary} text='View Details' onClick={''} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Card;