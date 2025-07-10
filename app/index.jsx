import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useTheme } from '../constants/theme';
import Loader from './../components/Helpers/Loader';
import { TokenService } from './../helpers/token';

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
      let authenticated = TokenService.isAuthenticated();
      if (authenticated) router.replace('/home');
      else router.replace('/login');
    }, 1000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style={'dark'} />
        <Loader />
      </SafeAreaView>
  );
};

export default Index;