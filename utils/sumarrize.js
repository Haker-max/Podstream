const axios = require("axios");

async function summarizeText(text) {
    const apiKey = "YOUR_OPENAI_API_KEY";
    
    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-4",
            messages: [{ role: "user", content: `Summarize this: ${text}` }],
        },
        { headers: { "Authorization": `Bearer ${apiKey}` } }
    );

    return response.data.choices[0].message.content;
}

module.exports = summarizeText;
