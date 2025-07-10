import React, { useEffect, useRef } from 'react';
import { Animated, Image, View } from 'react-native';

const Loader = () => {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const blinkAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0.2,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        );

        blinkAnimation.start();

        return () => blinkAnimation.stop();
    }, [fadeAnim]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={{ opacity: fadeAnim }}>
                <Image
                    source={require('../../assets/images/splash2.png')}
                    style={{ width: 60, height: 60 }}
                    resizeMode="contain"
                />
            </Animated.View>
        </View>
    );
};

export default Loader;