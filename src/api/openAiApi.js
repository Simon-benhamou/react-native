// Import the formatUserDataForOpenAI function
import { formatUserDataForOpenAI } from './utils/formatUserDataForOpenAI';
export const fetchSummarizedArticle = async (article) => {
    // Simulate an API request to OpenAI
    return new Promise((resolve) => {
        setTimeout(() => {
            // In a real application, you'd use OpenAI's API to generate a summary
            // For demonstration purposes, we'll return the original content with a "summarized" prefix
            resolve({ ...article, content: `Summarized: ${article.content}` });
        }, 1000);
    });
};

export const getRecommendedArticles = async (history, profile) => {
    const formattedData = formatUserDataForOpenAI(history, profile);

  // Use the OpenAI API to analyze user data and get recommendations
  // Replace the following lines with your actual API call
  // Make sure to use the appropriate API key, content type, and endpoint
  /*
  const response = await fetch(/* OpenAI API endpoint , {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer YOUR_API_KEY`,
//     },
// body: JSON.stringify({ input: formattedData }),
//   });
// const data = await response.json();
// const recommendedArticles = data.choices[0].text;
*/

// For demo purposes, just return an array of articles
const recommendedArticles = [
    { id: 1, title: 'Recommended Article 1', content: 'This is a recommended article.' },
    { id: 2, title: 'Recommended Article 2', content: 'This is another recommended article.' },
];

return recommendedArticles;
};
