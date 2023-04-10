import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ArticleCard = ({ article }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: article.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{article.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ArticleCard;
