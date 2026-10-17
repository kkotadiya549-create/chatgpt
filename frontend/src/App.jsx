import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function handleSend() {
    if (!message.trim()) return;

    setMessages((previousMessages) => [
      ...previousMessages,
      message.trim(),
    ]);

    setMessage("");
  }

  function handleNewChat() {
    setMessages([]);
    setMessage("");
  }

  return (
    <div className="app">
      {/* New Sidebar Component */}
      <Sidebar />

      {/* Main Chat Area */}
      <main className="chat-area">
        {messages.length === 0 ? (
          <div className="welcome">
            <h1>What can I help with?</h1>
          </div>
        ) : (
          <div className="messages">
            {messages.map((msg, index) => (
              <div className="message-row" key={index}>
                <div className="user-message">{msg}</div>
              </div>
            ))}
          </div>
        )}

        {/* Message Input */}
        <div className="message-box">
          <span className="mic-icon" aria-label="Microphone">
            🎙️
          </span>

          <input
            type="text"
            placeholder="Message..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSend();
              }
            }}
          />

          <button className="send-button" onClick={handleSend}>
            Send
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;