import { useState } from "react";
import AiChatBotIcon from "./AiChatBotIcon";
import ReactMarkdown from "react-markdown";

const ChatMessage = ({ chat }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const getSrc = (img) =>
    typeof img === "string"
      ? img
      : img instanceof File
      ? URL.createObjectURL(img)
      : "";

  return (
    <>
      <div
        className={`message ${
          chat.role === "model" ? "bot" : "user"
        }-message`}
      >
        {chat.role === "model" && <AiChatBotIcon />}

        <div className="message-text">

          {/* TEXT */}
          <ReactMarkdown>
            {chat.text || ""}
          </ReactMarkdown>

          {/* IMAGE */}
          {chat.image && (
            <img
              src={getSrc(chat.image)}
              alt="upload"
              onClick={() => setSelectedImage(getSrc(chat.image))}
              style={{
                maxWidth: "100%",
                maxHeight: "220px",
                marginTop: "10px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            />
          )}

        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="full" />
        </div>
      )}
    </>
  );
};

export default ChatMessage;
