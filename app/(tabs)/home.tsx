import Headers from '@/components/Helpers/Headers'
import { useTheme } from '@/constants/theme'
import { hp } from '@/helpers/common'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeSection from './../../components/Home/Home'

const Home = () => {
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
            <Headers text='Home' add={false} />
            <View style={{ height: hp(100), marginBottom: hp(10) }}>
                <HomeSection />
            </View>
        </SafeAreaView>
    )
}

export default Home