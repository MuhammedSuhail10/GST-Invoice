import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useTheme } from '../constants/theme';
import { View } from 'react-native';
import Loader from './../components/Helpers/Loader';

const Index = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    bg: {
      backgroundColor: theme.colors.primaryBg,
      flex: 1,
    },
  });

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/sale');
      // router.replace('/landing/landing_1');
    }, 1000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
      <SafeAreaView style={styles.bg}>
        <StatusBar style={'light'} />
        <Loader />
      </SafeAreaView>
  );
};

export default Index;