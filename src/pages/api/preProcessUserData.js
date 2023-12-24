// preProcessUserData.js
import fs from 'fs';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function convertToEmbedding(text) {
    const response = await openai.embeddings.create({
        model: "text-similarity-babbage-001",
        input: text,
    });
    return response.data.embeddings[0];
}

async function preProcessUserData() {
    const userData = JSON.parse(fs.readFileSync('./UserData.json', 'utf8'));
    const embeddings = [];

    for (let data of userData) {
        const embedding = await convertToEmbedding(JSON.stringify(data));
        embeddings.push({ data, embedding });
    }

    fs.writeFileSync('./UserDataEmbeddings.json', JSON.stringify(embeddings));
}

preProcessUserData();