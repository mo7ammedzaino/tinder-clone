import { MdArrowBackIosNew, MdSend } from "react-icons/md";
import Header from "../../components/header";
import { useState } from "react";
import "./index.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Mohd Zaino⚡",
      message: " What's up!",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocKD2L_0SdlGEgm168glDybz6Ejvu-zQiy36slcbG-ib7wU=s288-c-no",
    },
    {
      id: 2,
      name: "Mohd Zaino⚡",
      message: " What's up!",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocKD2L_0SdlGEgm168glDybz6Ejvu-zQiy36slcbG-ib7wU=s288-c-no",
    },
    {
      id: 3,
      message: " What's up!",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocKD2L_0SdlGEgm168glDybz6Ejvu-zQiy36slcbG-ib7wU=s288-c-no",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.length) {
      return;
    }
    const newMessages = [...messages, { message: input }];
    setMessages(newMessages);
    setInput("");
  };
  return (
    <main className="chat-screen">
      <Header Icon={MdArrowBackIosNew} path="/chat" />

      <p className="chat-screen__about-chat">
        you matched with Elen on 05/10/2023
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chat-screen__message">
            <img
              className="chat-screen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chat-screen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chat-screen__message">
            <p className="chat-screen__owntext">{message.message}</p>
          </div>
        )
      )}
      <form className="chat-screen__form">
        <input
          className="chat-screen__input"
          placeholder="Send a message..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="chat-screen__button"
          type="submit"
          disabled={!input.length}
          onClick={handleSend}
        >
          <MdSend className="chat-screen__icon" />
        </button>
      </form>
    </main>
  );
};

export default ChatScreen;
