import { useTheme } from '@/constants/theme';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from './../../assets/icons/index';
import Button from './Button';

const Card = ({ companyName = "Company Name", date = "17-05-2001 06:40", totalRate = "0000", totalQuantity = "0000" }) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.secondaryBg,
            padding: 16,
            borderRadius: theme.borderRadius.md,
            marginBottom: 15,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,
            elevation: 5,
        },
        flexContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
        },
        text: {
            fontFamily: 'Poppins',
            fontSize: 15,
            color: theme.colors.text,
        },
        companyName: {
            fontSize: 18.5,
            fontWeight: '600',
            color: theme.colors.primary,
            flex: 1,
        },
        dateText: {
            fontSize: 13,
            opacity: 0.6,
        },
        label: {
            opacity: 0.7,
            fontSize: 14,
        },
        value: {
            fontWeight: '500',
            fontSize: 15,
        },
        actionsContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 5,
            marginTop: 15,
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
                <Text style={[styles.text, styles.companyName]} numberOfLines={1}>{companyName}</Text>
                <Text style={[styles.text, styles.dateText]}>{date}</Text>
            </View>

            {/* Data Rows */}
            <View style={styles.dataRow}>
                <Text style={[styles.text, styles.label]}>Total Rate:</Text>
                <View style={styles.rateContainer}>
                    <Text style={[styles.text, styles.currency]}>₹</Text>
                    <Text style={[styles.text, styles.value]}> {totalRate} </Text>
                </View>
            </View>

            <View style={styles.dataRow}>
                <Text style={[styles.text, styles.label]}>Total Quantity:</Text>
                <Text style={[styles.text, styles.value]}> {totalQuantity}
                </Text>
            </View>

            <View style={styles.actionsContainer}>
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
    );
};

export default Card;