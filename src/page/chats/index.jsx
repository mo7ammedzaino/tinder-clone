import { MdArrowBackIosNew } from "react-icons/md";
import Header from "../../components/header";
import { useState } from "react";
import { Link } from "react-router-dom";
import Chat from "../../components/chat";

const Chats = () => {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Mohd Zaino⚡",
      message: "YOOO\n What's up!",
      timestamp: "40 seconds ago",
      avatarUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocKD2L_0SdlGEgm168glDybz6Ejvu-zQiy36slcbG-ib7wU=s288-c-no",
    },
    {
      id: 2,
      name: "Mohd Zaino⚡",
      message: "YOOO\n What's up!",
      timestamp: "40 seconds ago",
      avatarUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocKD2L_0SdlGEgm168glDybz6Ejvu-zQiy36slcbG-ib7wU=s288-c-no",
    },
    {
      id: 3,
      name: "Mohd Zaino⚡",
      message: "YOOO\n What's up!",
      timestamp: "40 seconds ago",
      avatarUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocKD2L_0SdlGEgm168glDybz6Ejvu-zQiy36slcbG-ib7wU=s288-c-no",
    },
  ]);
  return (
    <main className="chats">
      <Header Icon={MdArrowBackIosNew} path="/" />
      {chats.map((chat) => (
        <Link key={chat.id} to={`/chat/${chat.name}`}>
          <Chat chat={chat} />
        </Link>
      ))}
    </main>
  );
};

export default Chats;
