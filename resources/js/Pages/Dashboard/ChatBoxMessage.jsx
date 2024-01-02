import UserLogo from '@/Assets/icon/UserLogo.svg';
import HeadsetLogo from '@/Assets/icon/HeadsetLogo.svg';
import { useEffect, useRef } from "react";
import Markdown from 'https://esm.sh/react-markdown@9';

const ChatBoxMessage = ({ messages, setMessages, typing, setTyping }) => {

  const scroll = useRef()
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <>

      {messages.map((data, i) => {
        return (
          <div className={`chat ${data.sender === "VAssist" ? "chat-start" : "chat-end"}`} key={i}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full bg-gray-100">
                <img alt="User Logo" src={data.sender === "VAssist" ? HeadsetLogo : UserLogo} className='p-2' />
              </div>
            </div>
            <div className={`chat-bubble bg-gray-100 text-black content ${data.sender === "VAssist" ? "overflow-auto" : ""}`}>
              <Markdown>
                {data.message}
              </Markdown>
            </div>
          </div>
        );
      })}

    </>
  );
}

export default ChatBoxMessage;