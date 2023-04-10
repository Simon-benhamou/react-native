import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdBanner = () => {
    return (
        <View style={styles.bannerContainer}>
            <Text style={styles.bannerText}>Your Ad Here</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bannerText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default AdBanner;
