# Chapter 12: AI ChatBot

## Overview
This chapter demonstrates building an AI-powered chat interface using JavaScript. You'll learn about API integration, asynchronous programming, and modern web development concepts.

## Files
- `index.html` - Chat UI structure
- `styles.css` - Styling and animations
- `chat.js` - Core JavaScript logic

## Key Concepts Learned

### 1. Async/Await
```javascript
async function sendMessage() {
    const response = await fetch(url);
    const data = await response.json();
}
```

### 2. Fetch API
Making HTTP requests to external APIs:
```javascript
const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify(data)
});
```

### 3. DOM Manipulation
- Creating elements dynamically
- Event listeners for user interactions
- Scrolling and auto-focus

### 4. Local Storage
Persisting user preferences:
```javascript
localStorage.setItem('key', value);
const value = localStorage.getItem('key');
```

## How to Run
1. Open `index.html` in any modern browser
2. Start chatting! (Works in demo mode without API key)
3. Optionally add OpenAI API key for real AI responses

## API Integration (Optional)
To use real AI responses:
1. Get API key from [OpenAI](https://platform.openai.com)
2. Click "API Configuration" and enter your key
3. Key is stored locally in your browser

## Demo Mode
Without an API key, the bot provides simulated responses with:
- Pattern matching for common questions
- Programming jokes
- JavaScript/Playwright info
- Random friendly responses

## Next Steps
- Add message history persistence
- Implement streaming responses
- Add voice input/output
- Create multiple chat personalities
