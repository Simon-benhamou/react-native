import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import AdBanner from '../components/AdBanner';
import CustomHeader from '../components/CustomHeader';
import { fetchArticles } from '../redux/actions/newActions';
import Loading from '../components/Loading/Loading';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.news.articles);
    const loading = useSelector((state) => state.news.loading);
    const error = useSelector((state) => state.news.error);

    console.log(articles)
    useEffect(() => {
        dispatch(fetchArticles('technology', 'us'));
    }, [dispatch]);

    if (loading) {
        return (
            <View>
                <Loading />
            </View>
        );
    }

    if (error) {
        return (
            <View>
                <CustomHeader title="AI-Powered News" />
                <Text>Error: {error}</Text>
            </View>
        );
    }

    return (
        <View>
            {/* <CustomHeader title="AI-Powered News" /> */}
            <FlatList
                data={articles}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Article', { article: item })}>
                        <ArticleCard article={item} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
            <AdBanner />
        </View>
    );
};

export default HomeScreen;
