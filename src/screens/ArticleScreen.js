import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { fetchSummarizedArticle } from '../api/openAiApi.js';
import { addToHistory } from '../redux/actions/userProfileActions.js';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

// Import the logo
import newsAiLogo from '../../assets/new_logo.png';
import Loading from '../components/Loading/Loading.js';
import { fetchArticle, reset } from '../redux/actions/newActions.js';

const ArticleScreen = ({ route }) => {
    const { article } = route.params;
    const currentArticle = article
    // || useSelector((state) => state.news.current);
    const loading = useSelector((state) => state.news.loading);
    const error = useSelector((state) => state.news.error);
    const dispatch = useDispatch();

    // Call this function when an article is opened
    console.log(currentArticle)
    useEffect(() => {
        dispatch(fetchArticle(article));
        dispatch(addToHistory(article));
        return () => {
          dispatch(reset())
        } 
    }, [dispatch]);


    // if (loading) {
    //     return <Loading />

    // }

    const paragraphs = currentArticle.content?.split('\n');

    return (
        <ScrollView>
            <Container>
                {/* Render the logo */}
                <LogoContainer>
                    <Logo source={newsAiLogo} />
                </LogoContainer>
                <Title>{currentArticle?.title}</Title>
                <ArticleImage source={{ uri: currentArticle?.urlToImage }} />
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
