const axios = require("axios");

async function chatbotResponse(userInput) {
    const apiKey = "YOUR_OPENAI_API_KEY";

    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-4",
            messages: [{ role: "user", content: userInput }],
        },
        { headers: { "Authorization": `Bearer ${apiKey}` } }
    );

    return response.data.choices[0].message.content;
}

module.exports = chatbotResponse;
