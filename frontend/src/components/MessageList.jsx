function MessageList({ messages }) {
    return (
      <div className="messages">
        {messages.length === 0 ? (
          <div className="welcome">
            <h1>What can I help with?</h1>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div className="message-row" key={index}>
              <div className="user-message">{msg}</div>
            </div>
          ))
        )}
      </div>
    );
  }
  
  export default MessageList;