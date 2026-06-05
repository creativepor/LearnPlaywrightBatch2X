// Chapter 12: AI ChatBot with API Integration
// Concepts: Async/Await, Fetch API, Event Listeners, DOM Manipulation

// Store API key
//let apiKey = localStorage.getItem('openai_api_key') || '';

// Google AI Studio (Gemini) API Key
// Get yours at: https://aistudio.google.com/app/apikey
let apiKey = 'AIzaSyDfjrI4zRhmzZCvZYgLn3Me6fC_W1UEpR8'; // Replace with your actual API key or leave empty for demo mode

// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');
const apiKeyInput = document.getElementById('apiKey');

// Load saved API key
if (apiKey) {
    apiKeyInput.value = apiKey;
}

// Event Listeners
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Save API Key
function saveApiKey() {
    apiKey = apiKeyInput.value.trim();
    if (apiKey) {
        localStorage.setItem('openai_api_key', apiKey);
        alert('API Key saved successfully!');
    } else {
        localStorage.removeItem('openai_api_key');
        alert('API Key removed. Using demo mode.');
    }
}

// Send Message
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    userInput.value = '';
    
    // Show typing indicator
    showTyping(true);
    sendBtn.disabled = true;

    try {
        let response;
        
        if (apiKey) {
            // Real API call to OpenAI
            response = await callOpenAI(message);
        } else {
            // Simulated response for demo
            response = await simulateAIResponse(message);
        }
        
        // Add bot response
        addMessage(response, 'bot');
    } catch (error) {
        console.error('Full error:', error);
        addMessage(`Error: ${error.message}. Falling back to demo mode...`, 'bot');
        
        // Fallback to demo mode after error
        setTimeout(async () => {
            const fallbackResponse = await simulateAIResponse(message);
            addMessage(fallbackResponse, 'bot');
        }, 1000);
    } finally {
        showTyping(false);
        sendBtn.disabled = false;
        userInput.focus();
    }
}

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = sender === 'bot' ? '🤖' : '👤';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <p>${escapeHtml(text)}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Show/hide typing indicator
function showTyping(show) {
    typingIndicator.style.display = show ? 'flex' : 'none';
    if (show) scrollToBottom();
}

// Scroll to bottom of chat
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Call Google AI Studio (Gemini) API
async function callOpenAI(message) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        { text: message }
                    ]
                }
            ]
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text.trim();
}

// Simulate AI Response (Demo Mode)
function simulateAIResponse(message) {
    return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
            const lowerMsg = message.toLowerCase();
            
            // Simple response patterns
            if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
                resolve('Hello there! How can I help you today?');
            } else if (lowerMsg.includes('javascript') || lowerMsg.includes('js')) {
                resolve('JavaScript is a versatile programming language! It\'s used for web development, server-side programming (Node.js), and even mobile apps. What would you like to know about it?');
            } else if (lowerMsg.includes('playwright')) {
                resolve('Playwright is an excellent end-to-end testing framework by Microsoft. It supports multiple browsers and provides reliable automation for web applications!');
            } else if (lowerMsg.includes('api')) {
                resolve('APIs (Application Programming Interfaces) allow different software applications to communicate. In this chat, we use the Fetch API to make HTTP requests!');
            } else if (lowerMsg.includes('async') || lowerMsg.includes('await')) {
                resolve('Async/Await is modern JavaScript syntax for handling asynchronous operations. It makes code that uses Promises cleaner and easier to read!');
            } else if (lowerMsg.includes('time')) {
                resolve(`The current time is ${new Date().toLocaleTimeString()}.`);
            } else if (lowerMsg.includes('joke')) {
                const jokes = [
                    'Why do programmers prefer dark mode? Because light attracts bugs! 🐛',
                    'Why did the developer go broke? Because he used up all his cache! 💰',
                    'How many programmers does it take to change a light bulb? None, that\'s a hardware problem! 💡',
                    'Why do Java developers wear glasses? Because they don\'t C#! 👓'
                ];
                resolve(jokes[Math.floor(Math.random() * jokes.length)]);
            } else {
                const responses = [
                    'That\'s interesting! Tell me more.',
                    'I\'m learning about that too. JavaScript is fascinating!',
                    'Great question! Keep exploring and learning.',
                    'You can do amazing things with code! 🚀',
                    'Programming opens up endless possibilities!'
                ];
                resolve(responses[Math.floor(Math.random() * responses.length)]);
            }
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    });
}

// Auto-focus input on load
userInput.focus();
console.log('🤖 AI ChatBot loaded! Add your OpenAI API key for real responses, or use demo mode.');
