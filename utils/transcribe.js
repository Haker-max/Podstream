const axios = require("axios");
const fs = require("fs");

async function transcribeAudio(audioFilePath) {
    const apiKey = "YOUR_OPENAI_API_KEY";  // Replace with your API key
    const fileData = fs.createReadStream(audioFilePath);

    const response = await axios.post("https://api.openai.com/v1/audio/transcriptions", fileData, {
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "multipart/form-data"
        }
    });

    return response.data.text;
}

module.exports = transcribeAudio;
