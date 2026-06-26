import { useRef } from "react";

const ChatForm = ({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userMessage =
      inputRef.current.value.trim();

    if (!userMessage) return;

    const newHistory = [
      ...chatHistory,
      {
        role: "user",
        text: userMessage,
      },
    ];

    setChatHistory(newHistory);
    generateBotResponse(newHistory);

    inputRef.current.value = "";
  };

  return (
    <form
      className="chat-form"
      onSubmit={handleFormSubmit}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
      />

      <button
        type="submit"
        className="material-symbols-outlined"
      >
        keyboard_arrow_up
      </button>
    </form>
  );
};

export default ChatForm;
