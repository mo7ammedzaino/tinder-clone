import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./css/App.css";
import NotFound from "./page/not-found";
import Home from "./page/home";
import Chats from "./page/chats";
import ChatScreen from "./page/chat-screen";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chats />} />
        <Route path="/chat/:person" element={<ChatScreen />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
};

export default App;
