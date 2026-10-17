import { useState } from "react";

function Sidebar() {
const [isOpen, setIsOpen] = useState(true);

const [chats, setChats] = useState([
{ id: 1, title: "Welcome to ChatGPT Clone" },
{ id: 2, title: "Learning React" },
{ id: 3, title: "Python Programming" },
]);

function handleNewChat() {
const newChat = {
id: Date.now(),
title: "New Chat",
};

```
setChats((prevChats) => [newChat, ...prevChats]);
```

}

function handleDeleteChat(id) {
setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
}

return (
<aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
<div className="sidebar-header">
{isOpen && <h2>ChatGPT</h2>}

```
    <button
      className="sidebar-toggle"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle sidebar"
    >
      ☰
    </button>
  </div>

  {isOpen && (
    <>
      <button className="new-chat-btn" onClick={handleNewChat}>
        + New Chat
      </button>

      <div className="chat-history">
        <h4>Recent Chats</h4>

        {chats.map((chat) => (
          <div className="chat-item" key={chat.id}>
            <button className="chat-title">{chat.title}</button>

            <button
              className="delete-chat-btn"
              onClick={() => handleDeleteChat(chat.id)}
              aria-label={`Delete ${chat.title}`}
              title="Delete chat"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <p>👤 My Profile</p>
        <p>⚙️ Settings</p>
      
        
      </div>
    </>
  )}
</aside>
);
}

export default Sidebar;
