import { useTheme } from '@/constants/theme';
import { hp } from '@/helpers/common';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SnackBar = ({ text, color }: {text: string, color?: boolean}) => {
    const theme = useTheme();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            bottom: hp(10),
            left: 20,
            right: 20,
            backgroundColor: color ? theme.colors.secondaryBg : theme.colors.primary,
            padding: 10,
            alignItems: 'center',
            borderRadius: 8,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
        },
        text: {
            color: color ? theme.colors.primary : '#fff',
            fontSize: 16,
            textAlign: 'center',
            fontFamily: 'Poppins'
        },
    });

    if (!visible) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default SnackBar;