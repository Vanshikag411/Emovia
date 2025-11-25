// Chatbot responses and patterns
const responses = {
    greetings: {
        patterns: ['hello', 'hi', 'hey', 'greetings'],
        replies: [
            "Hello! I'm here to support you. How are you feeling today?",
            "Hi! I'm your mental health assistant. Would you like to talk about your feelings?"
        ]
    },
    feelings: {
        patterns: ['sad', 'depressed', 'unhappy', 'down', 'lonely'],
        replies: [
            "I'm sorry you're feeling this way. Would you like to talk more about what's bothering you?",
            "It's okay to feel this way. Can you tell me more about what's causing these feelings?",
            "I'm here to listen. When did you start feeling this way?"
        ]
    },
    anxiety: {
        patterns: ['anxious', 'worried', 'stressed', 'nervous', 'panic'],
        replies: [
            "Anxiety can be overwhelming. Let's try to break down what's causing your anxiety.",
            "I understand anxiety can be difficult. Have you tried any relaxation techniques?",
            "Would you like to learn some simple breathing exercises that might help?"
        ]
    },
    positive: {
        patterns: ['happy', 'good', 'great', 'awesome', 'better'],
        replies: [
            "I'm glad you're feeling positive! What's contributing to your good mood?",
            "That's wonderful to hear! Would you like to share what's making you feel this way?"
        ]
    },
    help: {
        patterns: ['help', 'support', 'advice', 'guidance'],
        replies: [
            "I'm here to help. Would you like to talk about specific concerns?",
            "You're brave for seeking support. What kind of help are you looking for?"
        ]
    }
};

// Follow-up questions to maintain conversation
const followUpQuestions = [
    "How long have you been feeling this way?",
    "Would you like to tell me more about that?",
    "What do you think triggered these feelings?",
    "Have you talked to anyone else about this?",
    "What would help you feel better right now?"
];

let conversationState = {
    lastTopic: null,
    questionCount: 0
};

function addMessage(message, isUser = false) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userInput) {
    const input = userInput.toLowerCase();
    
    // Check for matches in our response patterns
    for (const category in responses) {
        if (responses[category].patterns.some(pattern => input.includes(pattern))) {
            conversationState.lastTopic = category;
            return responses[category].replies[Math.floor(Math.random() * responses[category].replies.length)];
        }
    }

    // If no pattern matches, use follow-up questions or general responses
    if (conversationState.lastTopic) {
        conversationState.questionCount++;
        if (conversationState.questionCount < followUpQuestions.length) {
            return followUpQuestions[conversationState.questionCount];
        }
    }

    // Default response if no patterns match
    return "I hear you. Could you tell me more about how you're feeling?";
}

function sendMessage() {
    const inputElement = document.getElementById('user-input');
    const userMessage = inputElement.value.trim();
    
    if (userMessage === '') return;
    
    // Add user message
    addMessage(userMessage, true);
    inputElement.value = '';

    // Simulate typing delay for more natural interaction
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        addMessage(botResponse, false);
    }, 1000);
}

// Handle Enter key
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Initial greeting
window.onload = () => {
    setTimeout(() => {
        addMessage("Hi! I'm your mental health assistant. How are you feeling today?", false);
    }, 500);
};