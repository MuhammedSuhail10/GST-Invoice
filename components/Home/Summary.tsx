import { useTheme } from '@/constants/theme'
import { hp } from '@/helpers/common'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Summary = () => {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            width: '48%',
            padding: 5,
            height: hp(13),
            marginTop: 5,
            backgroundColor: theme.colors.secondaryBg,
            borderRadius: theme.borderRadius.md,
        },
        flexContainer: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        text: {
            color: theme.colors.text,
            fontSize: 15,
            fontFamily: 'Poppins',
            marginTop: 2,
            // textAlign: 'center',
        },
    })

    return (
        <View style={styles.flexContainer}>
            <View style={styles.container}>
                <View style={{ width: '100%', padding: 10 }}>
                    <Text style={[styles.text, { fontSize: 17,color: theme.colors.primary, fontWeight: 900 }]}>Today</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <View>
                            <Text style={[styles.text, {  fontWeight: 700 }]}>Sales</Text>
                            <Text style={styles.text}>100</Text>
                        </View>
                        <View>
                            <Text style={[styles.text, {  fontWeight: 800 }]}>Purchases</Text>
                            <Text style={styles.text}>100</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ width: '100%', padding: 10 }}>
                    <Text style={[styles.text, { fontSize: 17,color: theme.colors.primary, fontWeight: 900 }]}>This Year</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                        <View>
                            <Text style={[styles.text, {  fontWeight: 700 }]}>Sales</Text>
                            <Text style={styles.text}>100</Text>
                        </View>
                        <View>
                            <Text style={[styles.text, { fontWeight: 800 }]}>Purchases</Text>
                            <Text style={styles.text}>100</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Summary
