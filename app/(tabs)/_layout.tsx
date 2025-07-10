import { useTheme } from '@/constants/theme';
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';
import Icon from './../../assets/icons';

export default function TabLayout() {
  const theme = useTheme();
  const [loaded, error] = useFonts({
    'Poppins': require('../../assets/fonts/Poppins.ttf'),
  });
  const iconActiveColor = theme.colors.primary
  const iconInactiveColor = "#A0A0A0";

  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.colors.primary,
        headerShown: false,
        tabBarInactiveTintColor: iconInactiveColor,
        tabBarLabelStyle: {
          width: '100%',
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontSize: 11,
          padding: 2,
        },
        tabBarBackground: () => <View style={{ flex: 1, backgroundColor: theme.colors.primaryBg }} />,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {
            borderColor: theme.colors.primaryBg,
          },
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIconStyle: { marginTop: 1 },
          tabBarIcon: ({ focused }) => <Icon name="home" size="24" focused stroke={focused ? iconActiveColor : iconInactiveColor} strokeWidth="1" />,
        }}
      />
      <Tabs.Screen
        name="sale"
        options={{
          title: 'Sale',
          tabBarIconStyle: { marginTop: 1 },
          tabBarIcon: ({ focused }) => <Icon name="sale" size="28" focused fill={focused ? iconActiveColor : iconInactiveColor} strokeWidth="1" />,
        }}
      />
      <Tabs.Screen
        name="purchase"
        options={{
          title: 'Purchase',
          tabBarIconStyle: { marginTop: 1 },
          tabBarIcon: ({ focused }) => <Icon name="purchase" size="28" focused fill={focused ? iconActiveColor : iconInactiveColor} strokeWidth="1" />,
        }}
      />
      <Tabs.Screen
        name="product"
        options={{
          title: 'Product',
          tabBarIconStyle: { marginTop: 1 },
          tabBarIcon: ({ focused }) => <Icon name="product" size="28" focused fill={focused ? iconActiveColor : iconInactiveColor} strokeWidth="1" />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIconStyle: { marginTop: 1 },
          tabBarIcon: ({ focused }) => <Icon name="menu" size="28" focused stroke={focused ? iconActiveColor : iconInactiveColor} strokeWidth="1" />,
        }}
      />
    </Tabs>
  );
}