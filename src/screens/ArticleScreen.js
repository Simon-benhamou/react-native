import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { fetchSummarizedArticle } from '../api/openAiApi.js';
import { addToHistory } from '../redux/actions/userProfileActions.js';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

// Import the logo
import newsAiLogo from '../../assets/new_logo.png';
import Loading from '../components/Loading/Loading.js';

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
        onOpenArticle(article);
        getSummarizedArticle();
    }, [article]);

    if (!summarizedArticle) {
        return <Loading />

    }

    const paragraphs = summarizedArticle.content.split('\n');

    return (
        <ScrollView>
            <Container>
                {/* Render the logo */}
                <LogoContainer>
                    <Logo source={newsAiLogo} />
                </LogoContainer>
                <Title>{summarizedArticle.title}</Title>
                <ArticleImage source={{ uri: summarizedArticle.urlToImage }} />
                {paragraphs.map((paragraph, index) => (
                    <Content key={index}>{paragraph}</Content>
                ))}
            </Container>
        </ScrollView>
    );
};

export default ArticleScreen;