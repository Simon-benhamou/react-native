// This is a mock news data array for demonstration purposes
const mockNewsData = [
    {
        id: '1',
        title: 'Breaking News: AI Revolutionizes News Aggregation',
        imageUrl: 'https://example.com/image1.jpg',
        content: 'Today, AI technology has taken another leap forward...'
    },
    {
        id: '2',
        title: 'Sports Update: Basketball Team Wins Championship',
        imageUrl: 'https://example.com/image2.jpg',
        content: 'In a thrilling game last night, the basketball team...'
    },
    // ... more articles
];

export const fetchNewsArticles = async () => {
    // Simulate an API request
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockNewsData);
        }, 1000);
    });
};
