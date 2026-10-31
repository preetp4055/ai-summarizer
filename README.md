# AI Text Summarizer

A full-stack web app that turns long text into a concise summary. It runs entirely on your own computer, using a locally hosted LLM (Llama 3) through [Ollama](https://ollama.com), so it needs no cloud AI service or API key.

## Features

- **Concise summaries:** paste any long text and get a short summary back.
- **Local AI:** your text stays on your computer and is processed by a model running through Ollama.
- **REST API:** an Express and TypeScript backend with request validation and error handling.
- **Simple interface:** a React frontend with a loading state while the summary is generated.

## Tech stack

| Layer    | Technologies                                |
| -------- | ------------------------------------------- |
| Backend  | Node.js, Express, TypeScript                |
| Frontend | React, TypeScript, Create React App, Axios  |
| AI       | Ollama, Llama 3                             |

## How it works

```text
React app (port 3000)
    |
    |  POST /api/summarize with your text
    v
Express API (port 5000)
    |
    |  POST /api/generate with a summarization prompt
    v
Ollama (port 11434, llama3 model)
```

## Project structure

```text
ai-summarizer/
├── backend/
│   └── src/
│       ├── index.ts              # Express server setup
│       ├── routes/summarise.ts   # POST /api/summarize route
│       └── service/aiService.ts  # Builds the prompt and calls Ollama
└── frontend/
    └── src/
        └── App.tsx               # Summarizer interface
```

## Getting started

You need [Node.js](https://nodejs.org) (tested with version 22) and [Ollama](https://ollama.com) installed. Make sure Ollama is running before you start.

**1. Download the model:**

```bash
ollama pull llama3
```

**2. Start the backend in one terminal:**

```bash
cd backend
npm install
npm run dev
```

The API runs at `http://localhost:5000`. If something else is using port 5000, stop it first.

**3. Start the frontend in a second terminal:**

```bash
cd frontend
npm install
npm start
```

Open `http://localhost:3000` in your browser, paste your text and click **Summarize**.

## API

### `POST /api/summarize`

**Request:**

```json
{
  "text": "The long text you want to summarize."
}
```

**Response:**

```json
{
  "summary": "A concise summary of the text."
}
```

| Status | Meaning                                  |
| ------ | ---------------------------------------- |
| `200`  | The summary was generated.               |
| `400`  | The `text` field is missing.             |
| `500`  | The request to the model failed.         |
