import { useRef, useState } from "react";

const ChatForm = ({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}) => {
  const inputRef = useRef();
  const [image, setImage] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();

    if (!userMessage && !image) return;

    const newHistory = [
      ...chatHistory,
      {
        role: "user",
        text: userMessage || "",
        image: image, // ✅ now properly stored
      },
    ];

    setChatHistory(newHistory);
    generateBotResponse(newHistory);

    inputRef.current.value = "";
    setImage(null);
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      {/* TEXT INPUT */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
      />

      {/* IMAGE INPUT (THIS WAS MISSING!) */}
      <input
        type="file"
        accept="image/*"
        id="imageUpload"
        style={{ display: "none" }}
        onChange={(e) => setImage(e.target.files[0])}
      />

      <label htmlFor="imageUpload" className="material-symbols-outlined">
        image
      </label>

      {/* SUBMIT */}
      <button type="submit" className="material-symbols-outlined">
        keyboard_arrow_up
      </button>
    </form>
  );
};

export default ChatForm;
