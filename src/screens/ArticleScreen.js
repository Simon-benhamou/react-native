import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { fetchSummarizedArticle } from '../api/openAiApi.js';
import { addToHistory } from '../redux/actions/userProfileActions.js';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { translateArticles } from '../api/service/newsService.js';
// Import the logo
import newsAiLogo from '../../assets/new_logo.png';
import Loading from '../components/Loading/Loading.js';
import {  reset } from '../redux/actions/newActions.js';

const ArticleScreen = ({ route }) => {
    const { article } = route.params;
    const loading = useSelector((state) => state.news.loading);

    const dispatch = useDispatch();
    // Call this function when an article is opened
    useEffect(() => {
        dispatch(addToHistory(article));
      translateArticles(article,'french')
        return () => {
        } 
    }, [dispatch]);

console.log(article)
    if (loading) {
        return <Loading />

    }

  const paragraphs = article.content?.split('\n');
    return (
        <ScrollView>
            <Container>
                {/* Render the logo */}
                <LogoContainer>
                    <Logo source={newsAiLogo} />
                </LogoContainer>
          <Title>{article?.title}</Title>
          
          <ArticleImage source={{ uri: article.urlToImage }} />
                {paragraphs?.map((paragraph, index) => (
                    <Content key={index}>{paragraph}</Content>
                ))}
            </Container>
        </ScrollView>
    );
};

export default ArticleScreen;
const Container = styled.View`
  padding: 16px;
  background-color: #ffffff;
`;

const LogoContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

const Logo = styled.Image`
  width: 150px;
  height: 40px;
  resize-mode: contain;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333333;
`;

const ArticleImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 12px;
`;

const Content = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  margin-bottom: 12px;
`;
