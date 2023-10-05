import "./index.css";

const Chat = ({ chat }) => {
  return (
    <article className="chat">
      <img className="chat__avatar" src={chat.avatarUrl} alt={chat.name} />
      <div className="chat__details">
        <h2 className="chat__name">{chat.name}</h2>
        <p className="chat__message">{chat.message}</p>
      </div>
      <p className="chat__timestamp">{chat.timestamp}</p>
    </article>
  );
};

export default Chat;
