import { useTheme } from '@/constants/theme';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  const theme = useTheme();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.primaryBg }, gestureEnabled: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.primaryBg }, gestureEnabled: false }}/>
      <Stack.Screen name="login" options={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.primaryBg }, gestureEnabled: false }}/>
      {/* <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
}
