import { useTheme } from '@/constants/theme';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  const theme = useTheme();
  const [loaded] = useFonts({
    // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, cardStyle: { backgroundColor: theme.colors.primaryBg }, animationEnabled: false, gestureEnabled: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false, cardStyle: { backgroundColor: theme.colors.primaryBg }, animationEnabled: false, gestureEnabled: false }} />
      {/* <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
}
