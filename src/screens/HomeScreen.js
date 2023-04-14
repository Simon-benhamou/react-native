import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import AdBanner from '../components/AdBanner';
import CustomHeader from '../components/CustomHeader';
import { fetchArticles } from '../redux/actions/newActions';
import Loading from '../components/Loading/Loading';
import styled from 'styled-components';
const LogoContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;
const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.news.articles);
    const loading = useSelector((state) => state.news.loading);
    const error = useSelector((state) => state.news.error);

    const category = useSelector((state) => state.news.category);
    const region = useSelector((state => state.news.region))

    useEffect(() => {
        dispatch(fetchArticles(category, region));
    }, [dispatch, category, region]);

    if (loading) {
        return (
            <LogoContainer >
                <Loading />
            </LogoContainer>
        );
    }

    if (error) {
        return (
            <LogoContainer>
                <Loading />
                <Text>Error: {error}</Text>
            </LogoContainer>
        );
    }

    return (
        <View>
            {/* <CustomHeader title="AI-Powered News" /> */}
            <FlatList
                data={articles}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('Article', { article: item })}>
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
