export function formatUserDataForOpenAI(history, profile) {
    let formattedData = `User profile: ${JSON.stringify(profile)}\nUser history:\n`;

    for (const article of history) {
        formattedData += `- ${article.title}\n`;
    }

    return formattedData;
}