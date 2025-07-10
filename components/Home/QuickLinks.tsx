import { useTheme } from '@/constants/theme';
import { hp } from '@/helpers/common';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from './../../assets/icons';

const QuickLinks = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            padding: 5,
            height: hp(16),
            marginTop: 10,
            backgroundColor: theme.colors.secondaryBg,
            borderRadius: theme.borderRadius.md,
        },
        flexContainer: {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
        },
        text: {
            paddingInline: 8,
            color: theme.colors.text,
            fontSize: 12,
            fontFamily: 'Poppins',
            marginTop: 5,
            textAlign: 'center',
        },
        row: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        icon: {
            marginBottom: 5,
            backgroundColor: theme.colors.primary,
            padding: 12,
            borderRadius: theme.borderRadius.full,
        }
    })
    return (
        <>
            <Text style={[styles.text, { textAlign: 'left', fontSize: 18, fontWeight: 700 }]}>Create</Text>
            <View style={styles.container}>
                <View style={styles.flexContainer}>
                    <View style={styles.row}>
                        <View style={styles.icon}>
                            <Icon name="saleAdd" size="28" focused stroke={theme.colors.primaryBg} strokeWidth="1" />
                        </View>
                        <Text style={styles.text}>Sale</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.icon}>
                            <Icon name="productAdd" size="28" focused fill={theme.colors.secondaryBg} strokeWidth="0.5" />
                        </View>
                        <Text style={styles.text}>Product</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.icon}>
                            <Icon name="customerAdd" size="28" focused fill={theme.colors.secondaryBg} strokeWidth="1" />
                        </View>
                        <Text style={styles.text}>Customer</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.icon}>
                            <Icon name="report" size="28" focused fill={theme.colors.secondaryBg} strokeWidth="1" />
                        </View>
                        <Text style={styles.text}>Report</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default QuickLinks;