import { useTheme } from '@/constants/theme';
import { hp, wp } from '@/helpers/common';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SnackBar from './../components/Helpers/SnackBar';
import { TokenService } from './../helpers/token';
import { login } from './../services/authService';

const Login = () => {
    const router = useRouter();
    const theme = useTheme();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const [enabledKB, setEnabledKB] = useState(true);
    const [error, setError] = useState('');
    const [snackVisible, setSnackVisible] = useState(false);
    const [snackKey, setSnackKey] = useState(0);

    const handlePhoneChange = (value: string) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        if (numericValue.length <= 10) {
            setPhone(numericValue)
            if (numericValue.length < 10 && enabled) setEnabled(false);
        };
        if (numericValue.length == 10 && password) { setEnabled(true); Keyboard.dismiss(); }
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
        if (value.length > 0 && !enabled && phone) setEnabled(true);
        else if (value.length == 0) setEnabled(false);
    };

    const handlelogin = async () => {
        setEnabled(false);
        setEnabledKB(false);
        setError('');
        const response = await login({ username: phone, password: password });
        setEnabledKB(true);
        setEnabled(true);
        if (response.status != 200) {
            setSnackKey(Date.now());
            setSnackVisible(true);
            setError(response.message || "Please try again later");
            return;
        }
        TokenService.saveName(response.data.name);
        let access_token = TokenService.saveToken(response.data.access)
        if (!access_token) { setSnackKey(Date.now()); setSnackVisible(true); setError("Something went wrong. Try again."); TokenService.deleteAllData(); return; }
        let refresh_token = TokenService.saveRefreshToken(response.data.refresh);
        if (!refresh_token) { setSnackKey(Date.now()); setSnackVisible(true); setError("Something went wrong. Try again."); TokenService.deleteAllData(); return; }
        router.push({
            pathname: "/home",
        });
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.primary,
        },
        keyboardContainer: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: wp(8),
        },
        logoContainer: {
            alignItems: 'center',
            marginBottom: hp(4),
        },
        logo: {
            width: wp(50),
            height: hp(20),
            marginBottom: hp(2),
        },
        title: {
            fontSize: wp(7),
            textAlign: 'center',
            fontFamily: 'Poppins',
            color: theme.colors.primaryBg,
            fontWeight: '700',
            letterSpacing: 1,
        },
        subtitle: {
            width: '80%',
            fontSize: wp(4),
            textAlign: 'center',
            color: theme.colors.primaryBg,
            opacity: 0.8,
            fontFamily: 'Poppins',
        },
        formContainer: {
            // marginTop: hp(2),
            paddingHorizontal: wp(2),
        },
        inputContainer: {
            marginBottom: hp(2),
        },
        inputLabel: {
            fontSize: wp(3.5),
            color: theme.colors.primaryBg,
            marginBottom: hp(1),
            fontFamily: 'Poppins',
            fontWeight: '500',
        },
        input: {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            paddingHorizontal: wp(5),
            paddingVertical: hp(1.8),
            borderRadius: theme.borderRadius.lg,
            fontSize: wp(4),
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.3)',
            color: theme.colors.primaryBg,
            fontFamily: 'Poppins',
        },
        inputFocused: {
            borderColor: theme.colors.primaryBg,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
        },
        passwordContainer: {
            position: 'relative',
        },
        passwordToggle: {
            position: 'absolute',
            right: wp(4),
            top: hp(1.8),
            padding: wp(1),
            width: wp(15),
        },
        passwordToggleText: {
            color: theme.colors.primaryBg,
            fontSize: wp(3.5),
            fontFamily: 'Poppins',
        },
        loginButton: {
            marginTop: hp(4),
            backgroundColor: enabled ? theme.colors.primaryBg : 'rgba(201, 171, 171, 0.3)',
            borderColor: enabled ? theme.colors.primaryBg : 'rgba(255, 255, 255, 0.3)',
            paddingVertical: hp(2),
            borderRadius: theme.borderRadius.lg,
            alignItems: 'center',
        },
        loginButtonText: {
            width: '100%',
            textAlign: 'center',
            color: enabled ? theme.colors.primary : 'rgba(255, 255, 255, 0.6)',
            fontSize: wp(4.5),
            fontWeight: '600',
            fontFamily: 'Poppins',
        },
        forgotPassword: {
            alignSelf: 'center',
            marginTop: hp(2),
        },
        forgotPasswordText: {
            color: theme.colors.primaryBg,
            fontSize: wp(3.5),
            fontFamily: 'Poppins',
            opacity: 0.8,
        },
        footer: {
            alignItems: 'center',
            marginTop: hp(4),
        },
        footerText: {
            color: theme.colors.primaryBg,
            fontSize: wp(3),
            fontFamily: 'Poppins',
            opacity: 0.6,
        },
    });

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.keyboardContainer}
            >
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/adaptive-icon.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>Invoixa</Text>
                    <Text style={styles.subtitle}>Make your billing easier</Text>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Phone Number</Text>
                        <TextInput
                            style={[styles.input, phone ? styles.inputFocused : null]}
                            placeholder="Enter your phone number"
                            placeholderTextColor="rgba(255, 255, 255, 0.6)"
                            value={phone}
                            onChangeText={handlePhoneChange}
                            keyboardType="phone-pad"
                            autoCapitalize="none"
                            editable={enabledKB ? true : false}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={[styles.input, password ? styles.inputFocused : null]}
                                placeholder="Enter your password"
                                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                                value={password}
                                onChangeText={handlePasswordChange}
                                secureTextEntry={!isPasswordVisible}
                                autoCapitalize="none"
                                editable={enabledKB ? true : false}
                            />
                            <TouchableOpacity
                                style={styles.passwordToggle}
                                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                            >
                                <Text style={styles.passwordToggleText}>
                                    {isPasswordVisible ? 'Hide' : 'Show'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity style={styles.loginButton} onPress={handlelogin} disabled={!enabled}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                {snackVisible && <SnackBar key={snackKey} color text={error} />}
            </KeyboardAvoidingView>
        </View>
    );
};

export default Login;