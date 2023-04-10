import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { fetchSummarizedArticle } from '../api/openAiApi.js';
import { addToHistory } from '../redux/actions/userProfileActions.js';
import { useDispatch } from 'react-redux';

const ArticleScreen = ({ route }) => {
    const { article } = route.params;
    const [summarizedArticle, setSummarizedArticle] = useState(null);
    const dispatch = useDispatch();

    // Call this function when an article is opened
    const onOpenArticle = (article) => {
        dispatch(addToHistory(article));
    };

    useEffect(() => {
        const getSummarizedArticle = async () => {
            try {
                const summary = await fetchSummarizedArticle(article);
                setSummarizedArticle(summary);
            } catch (error) {
                console.error('Failed to fetch summarized article:', error);
            }
        };
        onOpenArticle(article)
        getSummarizedArticle();
    }, [article]);

    if (!summarizedArticle) {
        return <Text>Loading...</Text>;
    }

    return (
        <ScrollView>
            <View>
                <Text>{summarizedArticle.title}</Text>
                <Image source={{ uri: summarizedArticle.imageUrl }} style={{ width: '100%', height: 200 }} />
                <Text>{summarizedArticle.content}</Text>
            </View>
        </ScrollView>
    );
};

export default ArticleScreen;
