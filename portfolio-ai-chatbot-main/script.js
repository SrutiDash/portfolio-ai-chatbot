// function toggleMobileMenu(){
//     document.getElementById("menu").classList.toggle("active");
// }

function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}

// Simple chatbot logic
// function sendMessage() {
//     const inputField = document.getElementById("user-input");
//     const chatWindow = document.getElementById("chat-window");
//     const userMessage = inputField.value;

//     if (userMessage.trim() === "") return;

//     const userDiv = document.createElement("div");
//     userDiv.className = "user-message";
//     userDiv.textContent = "You: " + userMessage;
//     chatWindow.appendChild(userDiv);

//     // Simulate bot response
//     const botDiv = document.createElement("div");
//     botDiv.className = "bot-message";
//     botDiv.textContent = "SrutiBot: I received your message - '" + userMessage + "'";
//     chatWindow.appendChild(botDiv);

//     inputField.value = "";
//     chatWindow.scrollTop = chatWindow.scrollHeight;
// }

function sendMessage() {
    const input = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');

    const userText = input.value.trim();
    if (userText === '') return;

    // Append user message
    chatWindow.innerHTML += `<div class="user-message">${userText}</div>`;

    // Fake bot response
    const botReply = getBotReply(userText);
    setTimeout(() => {
        chatWindow.innerHTML += `<div class="bot-message">${botReply}</div>`;
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 600);

    input.value = '';
}

function getBotReply(message) {
    // Simple dummy logic
    if (message.toLowerCase().includes("hello")) return "Hi there!";
    if (message.toLowerCase().includes("help")) return "How can I help you?";
    return "I'm just a dummy bot 🤖!";
}
