import React, { useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import AdBanner from '../components/AdBanner';
import { fetchArticles } from '../redux/actions/newActions';
import Loading from '../components/Loading/Loading';
import styled from 'styled-components/native';

const LogoContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { articles, loading, error, category, region } = useSelector((state) => ({
    articles: state.news.articles,
    loading: state.news.loading,
    error: state.news.error,
    category: state.news.category,
    region: state.news.region,
  }));

  const memoizedFetchArticles = useCallback(() => {
    dispatch(fetchArticles(category, region));
  }, [dispatch, category, region]);

  useEffect(() => {
    memoizedFetchArticles();
  }, [memoizedFetchArticles]);

  if (loading) {
    return (
      <LogoContainer>
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
      <FlatList
        data={articles}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('Article', { article: item })}>
            <ArticleCard article={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <AdBanner />
    </View>
  );
};

export default HomeScreen;