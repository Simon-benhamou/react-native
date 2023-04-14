export const filterAndSortNews = (articles, userPreferences) => {
    // Apply filters based on user preferences (e.g., category, source, language)
    let filteredArticles = articles.filter(article => {
        return (
            userPreferences.categories.includes(article.category) &&
            userPreferences.sources.includes(article.source.name) &&
            userPreferences.languages.includes(article.language)
        );
    });

    // Sort articles based on user preferences (e.g., recency, relevance)
    filteredArticles.sort((a, b) => {
        return userPreferences.sortBy === 'recency'
            ? new Date(b.publishedAt) - new Date(a.publishedAt)
            : b.relevance - a.relevance;
    });

    return filteredArticles;
};